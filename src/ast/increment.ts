import path, { join } from 'path';
import {
  SourceFile,
  Project,
  StatementStructures,
  ModuleDeclarationStructure,
  TypeAliasDeclarationStructure,
} from 'ts-morph';

import { INCREMENT_TEMP_DIR_NAME } from './constant';
import {
  getControllerTypesDep,
  mergeStatementBy,
  replaceExistStatements,
  resolveControllerNames,
} from './utils';
import { SyntaxKind } from 'ts-morph';
import { errors } from '@ts-morph/common';
import { cloneDeep, intersectionWith, pullAllWith, xor } from 'lodash';
import Log from '../log';

type IncrementMode = 'sort' | 'insert';

export class IncrementGenerator {
  morphProject: Project;

  path: string;

  typeSourceFile: SourceFile;

  incrementMode?: IncrementMode;

  dependTypes: string[] = [];

  constructor(filePath: string, typeFullText: string, incrementMode = 'insert') {
    this.path = filePath;
    this.morphProject = new Project();
    this.typeSourceFile = this.morphProject.createSourceFile(
      this.getFileName('typings.d.ts'),
      typeFullText,
    );
    this.incrementMode = incrementMode as IncrementMode;
  }

  private getFileName(fileName: string) {
    return path.join(this.path, INCREMENT_TEMP_DIR_NAME, fileName);
  }

  public collectDepends(serviceFileName: string, serviceFullText: string) {
    const serviceSourceFile = this.morphProject.createSourceFile(
      this.getFileName(serviceFileName),
      serviceFullText,
    );

    const depends = getControllerTypesDep(serviceSourceFile, this.typeSourceFile);

    this.dependTypes = [...new Set([...this.dependTypes, ...depends])];
  }

  public genIncrementTypes(oldTypeFilePath: string) {
    // TODO read old type strcture,
    // filter new type in new types,
    // replace old type with new type.
    let oldTypeSourceFile: SourceFile;

    try {
      oldTypeSourceFile = new Project().addSourceFileAtPath(oldTypeFilePath);
    } catch (e) {
      if (e instanceof errors.FileNotFoundError) {
        // return this.typeSourceFile.getFullText();
      } else {
        console.error((e as Error).message);
      }
    }

    const newTypeStructure = this.typeSourceFile
      .getStatementByKind(SyntaxKind.ModuleDeclaration)
      .getStructure();

    const oldTypeModuleDeclaration = oldTypeSourceFile?.getStatementByKind?.(
      SyntaxKind.ModuleDeclaration,
    );

    const oldStatements = (oldTypeModuleDeclaration?.getStructure?.()?.statements ??
      []) as TypeAliasDeclarationStructure[];

    const newStatements = newTypeStructure.statements as TypeAliasDeclarationStructure[];

    // 新旧交集
    const intersectionStatements = intersectionWith(
      oldStatements,
      newStatements,
      (a, b) => a.name === b.name,
    );

    // 交集中，依赖的type
    const intersectionDependStatements = intersectionStatements.filter((x) =>
      this.dependTypes.includes(x.name),
    );

    // 新，去除交集，且为依赖
    const newDependWithoutIntersectionStatements = pullAllWith(
      cloneDeep(newStatements),
      intersectionDependStatements,
      (a, b) => a.name === b.name,
    ).filter((x) => this.dependTypes.includes(x.name));

    // filter increment types in all new types
    const incrementStatements = (
      newTypeStructure.statements as TypeAliasDeclarationStructure[]
    ).filter((x) => this.dependTypes.includes(x.name));

    // reserve old types，without new and depended types
    const oldWithoutDependStatements = oldStatements?.filter(
      (x) => !this.dependTypes.includes(x.name),
    );

    let statements: TypeAliasDeclarationStructure[] = [];

    Log(
      `⚠ 可能修改的type：${intersectionDependStatements.reduce(
        (pre, cur) => pre + ` ${cur.name}`,
        '',
      )}`,
    );

    Log(
      `⚠ 新增的type：${newDependWithoutIntersectionStatements.reduce(
        (pre, cur) => pre + ` ${cur.name}`,
        '',
      )}`,
    );


    // TODO sort insert or find insert
    if (this.incrementMode === 'insert') {
      // old types maybe not found
      if (oldStatements.length === 0) {
        statements.push(...incrementStatements);
      } else {
        statements = [...oldStatements];

        // // replace exist statements
        replaceExistStatements(statements, intersectionDependStatements);

        statements = mergeStatementBy<TypeAliasDeclarationStructure>(
          statements,
          newDependWithoutIntersectionStatements,
          (pOld, cOld, newItem) =>
            newItem.name.localeCompare(cOld?.name) < 0 &&
            newItem.name.localeCompare(pOld?.name ?? '') > 0,
        );

        // const positionMap = calcIncrementPositions(
        //   statements.map((x) => x.name),
        //   incrementStatements.map((x) => x.name),
        // );

        // incrementStatements.forEach((s) => {
        //   const index = positionMap.get(s.name);

        //   statements.splice(index, 0, s);
        // });
      }
    } else {
      statements.push(...oldWithoutDependStatements, ...incrementStatements);

      statements.sort((a, b) => a.name.localeCompare(b.name));
    }

    statements = cloneDeep(statements).reduce(
      (p, c, i) => (i !== statements.length - 1 ? [...p, c, '\r\n'] : [...p, c]),
      [],
    );

    if (oldTypeModuleDeclaration) {
      oldTypeModuleDeclaration.set({
        ...oldTypeModuleDeclaration.getStructure(),
        statements: statements,
      });

      oldTypeSourceFile.formatText({
        convertTabsToSpaces: true,
      });

      const text = oldTypeSourceFile.getFullText();

      return text;
    } else {
      const newTypeModuleDeclaration = this.typeSourceFile.getStatementByKind?.(
        SyntaxKind.ModuleDeclaration,
      );

      newTypeModuleDeclaration.set({
        ...newTypeModuleDeclaration.getStructure(),
        statements: statements,
      });

      this.typeSourceFile.formatText({
        convertTabsToSpaces: true,
      });

      const text = this.typeSourceFile.getFullText();

      return text;
    }
  }

  public genServiceIndexIncrement(
    fileName: string,
    newControllers: {
      fileName: string;
      controllerName: string;
    }[],
  ) {
    let oldIndexSourceFile;

    try {
      oldIndexSourceFile = new Project().addSourceFileAtPath(join(this.path, fileName));
    } catch (e) {
      if (e instanceof errors.FileNotFoundError) {
        return newControllers;
      } else {
        console.error((e as Error).message);
      }
    }

    const oldControllers = resolveControllerNames(oldIndexSourceFile) ?? [];

    const oldControllerNames = oldControllers.map((x) => x.fileName);
    const newControllerNames = newControllers.map((x) => x.fileName) ?? [];

    const oldWithoutNewControllerNames = xor(
      oldControllerNames, // [1,2]
      newControllerNames, // [2,3]
    ).filter((x) => !newControllerNames.includes(x)); // [1]

    const oldWithoutNewControllers = oldWithoutNewControllerNames.map((name) => ({
      fileName: name,
      controllerName: name,
    }));

    // TODO sort insert or find insert

    if (this.incrementMode === 'insert') {
      const controllers = mergeStatementBy<{
        fileName: string;
        controllerName: string;
      }>(
        oldControllers,
        newControllers,
        (preOldController, curOldController, newController) =>
          newController.fileName.localeCompare(curOldController?.fileName) < 0 &&
          newController.fileName.localeCompare(preOldController?.fileName ?? '') > 0,
      );

      return controllers;

      // const positionMap = calcIncrementPositions(diffControllerNames, incrementControllers);

      // newControllerClassList.forEach((c) => {
      //   const index = positionMap.get(c.fileName);

      //   diffControllers.splice(index, 0, c);
      // });

      // return diffControllers;
    } else {
      return newControllers
        .concat(oldWithoutNewControllers)
        .sort((a, b) => a.fileName.localeCompare(b.fileName));
    }
  }
}

function genServiceControllerTypingsIncrement(
  controllerPath: string,
  typePath: string,
  newControllerFullText: string,
  newTypeFullText: string,
) {
  /**
   * 1. 输出新的Controller,
   * 2. 在新的controller，配合新的type定义，找到该controller依赖的所有types
   * 3. 全量替换controller, 在旧types的基础上，删除旧依赖的types， 用新依赖types填充
   * 4. 按字母顺序排序， 输出新types
   * 5. 增量更新index.ts
   */
}

// const a = new IncrementGenerator(
//   __dirname,
//   `
// // @ts-ignore
// /* eslint-disable */

// declare namespace API {
//   type AdjustOrderChangeWarehouseCmd = {
//     /** 调整单主键id */
//     adjustOrderId?: string;
//     /** 库存地id */
//     warehouseDistrictId?: string;
//     /** 仓库id */
//     warehouseId?: string;
//   };

//   type AdjustOrderCreateCmd = {
//     /** 调整类型 */
//     adjustTypeCode?: string;
//     /** 库存表id(列表) */
//     inventoryIds?: number[];
//   };

//   type AdjustOrderDTO = {
//     /** 调整单号 */
//     adjustOrderCode?: string;
//     /** 调整单主键id */
//     adjustOrderId?: string;
//     /** 调整原因 */
//     adjustReason?: string;
//     /** 调整类型(数据字典) */
//     adjustTypeCode?: string;
//     /** 调整类型名称 */
//     adjustTypeName?: string;
//     /** 创建人 */
//     createBy?: string;
//     /** 创建人(名称) */
//     createByName?: string;
//     /** 创建时间 */
//     createTime?: string;
//     /** 修改人 */
//     modifyBy?: string;
//     /** 修改人(名称) */
//     modifyByName?: string;
//     /** 修改时间 */
//     modifyTime?: string;
//     /** 状态 */
//     statusCode?: string;
//     /** 状态名称 */
//     statusName?: string;
//     /** 提交时间 */
//     submitTime?: string;
//     /** 库存地编码 */
//     warehouseDistrictCode?: string;
//     /** 仓库id */
//     warehouseDistrictId?: string;
//     /** 库存地名称 */
//     warehouseDistrictName?: string;
//     /** 仓库id */
//     warehouseId?: string;
//   };

//   type SuperMan = {
//     haha: string;
//   }
// };
// `,
// );

// const res = a.genIncrementTypes(path.resolve('./', 'typings.d.ts'));

// console.log(res);
