import path, { join } from 'path';
import {
  SourceFile,
  Project,
  StatementStructures,
  ModuleDeclarationStructure,
  TypeAliasDeclarationStructure,
} from 'ts-morph';
import { INCREMENT_TEMP_DIR_NAME } from './constant';
import { getControllerTypesDep, resolveControllerNames } from './utils';
import { SyntaxKind } from 'ts-morph';
import {errors} from '@ts-morph/common'
import { xor } from 'lodash';

export class IncrementGenerator {
  morphProject: Project;

  path: string;

  typeSourceFile: SourceFile;

  dependTypes: string[] = [];

  constructor(filePath: string, typeFullText: string) {
    this.path = filePath;
    this.morphProject = new Project();
    this.typeSourceFile = this.morphProject.createSourceFile(
      this.getFileName('typings.d.ts'),
      typeFullText,
    );
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
    let oldTypeSourceFile;

    try {
      oldTypeSourceFile = new Project().addSourceFileAtPath(oldTypeFilePath);
    } catch (e) {
      if (e instanceof errors.FileNotFoundError) {
        return this.typeSourceFile.getFullText();
      } else {
        console.error((e as Error).message);
      }
    }
    
    const oldTypeModuleDeclaration = oldTypeSourceFile.getStatementByKind(
      SyntaxKind.ModuleDeclaration,
    );

    const newTypeStructure = this.typeSourceFile
      .getStatementByKind(SyntaxKind.ModuleDeclaration)
      .getStructure();

    // // TODO
    // this.dependTypes = ['SuperMan'];

    const incrementStatements = (
      newTypeStructure.statements as TypeAliasDeclarationStructure[]
    ).filter((x) => this.dependTypes.includes(x.name));

    const newStatements = (
      oldTypeModuleDeclaration.getStructure().statements as TypeAliasDeclarationStructure[]
    )?.filter((x) => !this.dependTypes.includes(x.name));

    newStatements.push(...incrementStatements);

    newStatements.sort((a, b) => a.name.localeCompare(b.name));

    oldTypeModuleDeclaration.set({
      ...oldTypeModuleDeclaration.getStructure(),
      statements: newStatements,
    });

    return oldTypeSourceFile.getFullText();
  }

  public genServiceIndexIncrement(
    fileName: string,
    newControllerClassList: {
      fileName: string;
      controllerName: string;
    }[],
  ) {

    let oldIndexSourceFile;

    try {
      oldIndexSourceFile = new Project().addSourceFileAtPath(join(this.path, fileName));
    } catch (e) {
      if (e instanceof errors.FileNotFoundError) {
        return newControllerClassList;
      } else {
        console.error((e as Error).message);
      }
    }

    const oldControllers = resolveControllerNames(oldIndexSourceFile) ?? [];

    const newControllers = newControllerClassList.map((x) => x.fileName) ?? [];

    const diffControllers = xor(
      oldControllers.map((x) => x.fileName),
      newControllers,
    ).filter((x) => !newControllers.includes(x));

    return oldControllers
      .concat(
        diffControllers.map((name) => ({
          fileName: name,
          controllerName: name,
        })),
      )
      .sort((a, b) => a.fileName.localeCompare(b.fileName));
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
