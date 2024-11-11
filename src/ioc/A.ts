import * as swc from '@swc/core';

function Decorator<T extends { new (...args: any[]): any }>(target: T) {
  let classCode = target.toString();
  if (classCode.startsWith('class{')) {
    classCode = 'class _{' + classCode.slice(6);
  }
  const ast = swc.parseSync(classCode);
  const classDeclaration = ast.body[0] as swc.ClassDeclaration;
  const constructor = classDeclaration.body.find((node) => node.type === 'Constructor');
  console.log(constructor?.params);
}

@Decorator
class A {
  public constructor(
    private readonly a: number,
    private readonly b: number,
  ) { }

  public sum() {
    return this.a + this.b;
  }
}

export default A
