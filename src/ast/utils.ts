import typescript, { forEachChild } from 'typescript';
import fs from 'fs';
import path from 'path';

import { Project, Node, TypeReferenceNode } from 'ts-morph';
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

export function getTypesFromDeclare(p) {
  const absPath = path.resolve(__dirname, p);

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

  const project = new Project();

  const source = project.addSourceFileAtPath(absPath);

  let count = 0;

  const getTypeReferenceName = (typeReference: TypeReferenceNode) => {
    const qn = typeReference.getFirstChildIfKind(SyntaxKind.QualifiedName);

    if (Node.isQualifiedName(qn)) {
      debugger;
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
        .map((param) => param.getChildrenOfKind(SyntaxKind.TypeReference).map(getTypeReferenceName))
        .flat(2);

      const callTypeReference = funcNode
        .getStatementByKind(SyntaxKind.ReturnStatement)
        .getChildAtIndexIfKindOrThrow(1, SyntaxKind.CallExpression)
        .getFirstChildByKindOrThrow(SyntaxKind.TypeReference);

      const callTypeName = getTypeReferenceName(callTypeReference);
      // .getChildrenOfKind(SyntaxKind.CallExpression)
      // .map((call) =>
      //   call.getChildrenOfKind(SyntaxKind.TypeReference).map((tr) => tr.getKindName()),
      // );

      return [...paramsTypeReference, callTypeName];
    })
    .flat();
  console.log(typeNames);
  debugger;

  return typeNames;
}

export function getTypesFormController(p) {
  // const absPath = path.resolve(__dirname, p);
  // const sourceFile = typescript.createSourceFile(
  //   absPath,
  //   fs.readFileSync(absPath).toString(),
  //   typescript.ScriptTarget.ES2015,
  //   true,
  // );
  // const typeNames: string[] = [];
  // traverseGetNodesByType(sourceFile, isTypeReferenceNode, (node: TypeReferenceNode) => {
  //   typeNames.push((node.typeName as QualifiedName).right.getText());
  // });
  // debugger;
  // return [...new Set(typeNames)];
}

// const a = getTypesFromDeclare('./typings.d.ts');
const a = getTypesFromDeclare('./UserAccount.ts');
debugger;
