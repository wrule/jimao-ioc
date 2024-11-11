import fs from 'fs/promises';
import * as swc from '@swc/core';
import { getAllExportClass } from './ioc';

export
async function main() {
  const ast = await getAllExportClass('./src/services/NFTServices.ts');
  console.log(ast.type);
}
