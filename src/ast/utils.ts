import typescript, { forEachChild } from 'typescript';
import fs from 'fs';
import path from 'path';

import { Project, Node, TypeReferenceNode, SourceFile, QualifiedName } from 'ts-morph';
import { SyntaxKind } from '@ts-morph/common';

export function traverseGetNodesByType(
  pNode: Node,
  type: SyntaxKind | ((n: Node) => boolean),
  cb: (n: Node) => void,
) {
  // forEachChild(pNode, (c: Node) => {
  //   if (typeof type === 'function') {
  //     type(c) && cb(c);
  //   } else {
  //     c.kind === type && cb(c);
  //   }
  //   traverseGetNodesByType(c, type, cb);
  // });
}

export function getTypesFromDeclare(source: SourceFile) {
  // const absPath = path.resolve(__dirname, p);

  // const sourceFile = typescript.createSourceFile(
  //   absPath,
  //   fs.readFileSync(absPath).toString(),
  //   typescript.ScriptTarget.ES2015,
  //   true,
  // );
  // const typeNames: string[] = [];

  // traverseGetNodesByType(sourceFile, isTypeAliasDeclaration, (node: TypeAliasDeclaration) => {
  //   typeNames.push(node.name.getText());
  // });

  // const project = new Project();

  // const source = project.addSourceFileAtPath(absPath);

  let count = 0;

  const getTypeReferenceName = (typeReference: TypeReferenceNode) => {
    const qn = typeReference.getFirstChildIfKind(SyntaxKind.QualifiedName);

    if (Node.isQualifiedName(qn)) {
      // debugger;
      return qn.getRight().getText();
    } else {
      return undefined;
    }
  };

  const typeNames = source
    .getModules()
    .map((md) => md.getTypeAliases().map((ta) => ta.getName()))
    .flat();


  return typeNames;
}

export function getTypesFormController(source: SourceFile) {
  // const absPath = path.resolve(__dirname, p);
  // // const sourceFile = typescript.createSourceFile(
  // //   absPath,
  // //   fs.readFileSync(absPath).toString(),
  // //   typescript.ScriptTarget.ES2015,
  // //   true,
  // // );
  // // const typeNames: string[] = [];
  // // traverseGetNodesByType(sourceFile, isTypeReferenceNode, (node: TypeReferenceNode) => {
  // //   typeNames.push((node.typeName as QualifiedName).right.getText());
  // // });
  // // debugger;
  // // return [...new Set(typeNames)];

  // const project = new Project();
  // const source = project.addSourceFileAtPath(absPath);

  // let count = 0;

  const getTypeReferenceName = (typeReference: TypeReferenceNode) => {
    let qn: QualifiedName;
    try {
      qn = typeReference.getFirstChildIfKind(SyntaxKind.QualifiedName);
    } catch {
      return undefined;
    }

    if (Node.isQualifiedName(qn)) {
      return qn.getRight().getText();
    } else {
      return undefined;
    }
  };

  const typeNames = source
    .getFunctions()
    .map((funcNode) => {
      const paramsTypeReference = funcNode
        .getParameters()
        .map((param) => {
          return [
            ...param.getChildrenOfKind(SyntaxKind.TypeReference).map(getTypeReferenceName),
            ...param
              .getChildrenOfKind(SyntaxKind.ArrayType)
              .map((at) => at.getChildrenOfKind(SyntaxKind.TypeReference).map(getTypeReferenceName))
              .flat(),
          ];
        })
        .flat(2);
      let callTypeReference: TypeReferenceNode;
      try {
        callTypeReference = funcNode
          .getStatementByKind(SyntaxKind.ReturnStatement)
          .getChildAtIndexIfKindOrThrow(1, SyntaxKind.CallExpression)
          .getFirstChildByKindOrThrow(SyntaxKind.TypeReference);
      } catch {
        try {
          callTypeReference = funcNode
            .getStatementByKind(SyntaxKind.ReturnStatement)
            .getFirstChildByKindOrThrow(SyntaxKind.CallExpression)
            .getFirstChildByKindOrThrow(SyntaxKind.ArrayType)
            .getFirstChildByKindOrThrow(SyntaxKind.TypeReference);
        } catch {}
      }
      const callTypeName = getTypeReferenceName(callTypeReference);
      // .getChildrenOfKind(SyntaxKind.CallExpression)
      // .map((call) =>
      //   call.getChildrenOfKind(SyntaxKind.TypeReference).map((tr) => tr.getKindName()),
      // );

      return [...paramsTypeReference, callTypeName];
    })
    .flat();

  return [...new Set(typeNames.filter((x) => !!x))];
}

export function getControllerTypesDep(controllerSource: SourceFile, typeSource: SourceFile) {
  const controllerTypes = getTypesFormController(controllerSource);

  const module = typeSource.getStatementByKind(SyntaxKind.ModuleDeclaration);

  const depTypes: string[] = [...controllerTypes];
  const getTypeReferenceDeps = (typeName: string) => {
    const ta = module.getTypeAlias(typeName);

    try {
      const typeReferences = ta
        .getChildAtIndexIfKind(3, SyntaxKind.TypeLiteral)
        .getChildAtIndexIfKind(1, SyntaxKind.SyntaxList)
        .getChildrenOfKind(SyntaxKind.PropertySignature)
        .map((ps) => [
          ...ps.getChildrenOfKind(SyntaxKind.TypeReference).map((tr) => tr.getText()),
          ...ps
            .getChildrenOfKind(SyntaxKind.ArrayType)
            .map((at) => at.getChildrenOfKind(SyntaxKind.TypeReference).map((tr) => tr.getText()))
            .flat(),
        ])
        .flat();

      const nonInDepTypes = typeReferences.filter((tr) => !depTypes.includes(tr));

      depTypes.push(...nonInDepTypes);

      nonInDepTypes.forEach((trName) => getTypeReferenceDeps(trName));
    } catch {}
  };

  controllerTypes.forEach((typeName) => getTypeReferenceDeps(typeName));

  return [...new Set(depTypes)];
}

export function resolveControllerNames(indexSource: SourceFile) {
  return indexSource.getImportDeclarations().map((id) => {
    const name = id.getNamespaceImport().getText();
    return {
      fileName: name,
      controllerName: name,
    };
  });
}

// const controllerProject = new Project().addSourceFileAtPath('./UserAccount.ts');
// const typeProject = new Project().addSourceFileAtPath('./typings.d.ts');

// const a = getTypesFromDeclare(typeProject);
// const b = getTypesFormController(controllerProject);
// const c = getControllerTypesDep(controllerProject, typeProject);

// const v = resolveControllerNames(new Project().addSourceFileAtPath('./iii.ts'));
// console.log(v);
