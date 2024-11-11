import * as swc from '@swc/core';
import { A } from './A';

export
function test() {
  const a = new A(1, 9);
  console.log(a.sumString);
}

export
async function getAllExportClass(tsPath: string) {
  const ast = await swc.parseFile(tsPath, {
    syntax: 'typescript',
  });
  const exports = ast.body.filter((node) => node.type === 'ExportDefaultExpression');
  console.log(exports);
  return ast;
}
