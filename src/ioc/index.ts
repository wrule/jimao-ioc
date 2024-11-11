import * as swc from '@swc/core';

export
async function getAllExportClass(tsPath: string) {
  const ast = await swc.parseFile(tsPath, {
    syntax: 'typescript',
  });
  return ast;
}
