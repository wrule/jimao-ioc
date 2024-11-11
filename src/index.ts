import fs from 'fs/promises';
import * as swc from '@swc/core';

export
async function main() {
  const code = await fs.readFile('./src/services/NFTServices.ts', 'utf8');
  const ast = await swc.parse(code, {
    syntax: 'typescript',
  });
  console.log(ast);
}
