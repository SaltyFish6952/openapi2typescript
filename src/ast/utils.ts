import typescript, {
  ModuleBlock,
  ModuleDeclaration,
  TypeAliasDeclaration,
  SyntaxKind,
  forEachChild,
  Node,
  isTypeAliasDeclaration,
  isTypeReferenceNode,
  TypeReferenceNode,
  QualifiedName,
} from 'typescript';
import fs from 'fs';
import path from 'path';

import { Project } from 'ts-morph';

export function traverseGetNodesByType(
  pNode: Node,
  type: SyntaxKind | ((n: Node) => boolean),
  cb: (n: Node) => void,
) {
  forEachChild(pNode, (c: Node) => {
    if (typeof type === 'function') {
      type(c) && cb(c);
    } else {
      c.kind === type && cb(c);
    }
    traverseGetNodesByType(c, type, cb);
  });
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

  const typeNames = source
    .getFunctions()
    .map((funcNode) =>
      funcNode
        .getParameters()
        .map((n) => n.getChildrenOfKind(SyntaxKind.TypeReference).map((tr) => tr.getText())),
    );

  debugger;

  return typeNames;
}

export function getTypesFormController(p) {
  const absPath = path.resolve(__dirname, p);

  const sourceFile = typescript.createSourceFile(
    absPath,
    fs.readFileSync(absPath).toString(),
    typescript.ScriptTarget.ES2015,
    true,
  );
  const typeNames: string[] = [];

  traverseGetNodesByType(sourceFile, isTypeReferenceNode, (node: TypeReferenceNode) => {
    typeNames.push((node.typeName as QualifiedName).right.getText());
  });

  debugger;

  return [...new Set(typeNames)];
}

// const a = getTypesFromDeclare('./typings.d.ts');
const a = getTypesFromDeclare('./UserAccount.ts');
debugger;
