import * as swc from '@swc/core';

export
async function getAllExportClass(tsPath: string) {
  const ast = await swc.parseFile(tsPath, {
    syntax: 'typescript',
  });
  const exports = ast.body.filter((node) => node.type === 'ExportDefaultExpression');
  console.log(exports);
  return ast;
}
