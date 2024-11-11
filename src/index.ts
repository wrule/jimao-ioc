import fs from 'fs/promises';
import * as swc from '@swc/core';
import { getAllExportClass, test } from './ioc';

export
async function main() {
  test();
  // const ast = await getAllExportClass('./src/services/NFTServices.ts');
  // console.log(ast.type);
}
