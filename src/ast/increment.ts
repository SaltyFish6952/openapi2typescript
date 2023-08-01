import path, { join } from 'path';
import { SourceFile, Project, TypeAliasDeclarationStructure } from 'ts-morph';

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
    const intersectionDependStatementNames = intersectionStatements
      .filter((x) => this.dependTypes.includes(x.name))
      .map((x) => x.name);

    const newIntersectionDependStatements = newStatements.filter((x) =>
      intersectionDependStatementNames.includes(x.name),
    );

    // 新，去除交集，且为依赖
    const newDependWithoutIntersectionStatements = pullAllWith(
      cloneDeep(newStatements),
      newIntersectionDependStatements,
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

    newIntersectionDependStatements.length &&
      Log(
        `⚠ 可能修改的type：${newIntersectionDependStatements.reduce(
          (pre, cur) => pre + ` ${cur.name}`,
          '',
        )}`,
      );

    newDependWithoutIntersectionStatements.length &&
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
        const replacedStatements = replaceExistStatements(
          statements,
          newIntersectionDependStatements,
        );

        replacedStatements.length &&
          Log(
            `⚠ 替换内容的type：${replacedStatements.reduce(
              (pre, cur) => pre + ` ${cur.name}`,
              '',
            )}`,
          );

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
