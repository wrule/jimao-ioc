import * as swc from '@swc/core';

function Decorator<T extends { new (...args: any[]): any }>(target: T) {
  const classCode = target.toString().replace(/^class\{/, 'class _{');
  const ast = swc.parseSync(classCode);
  const classDeclaration = ast.body[0] as swc.ClassDeclaration;
  const constructor = classDeclaration.body.find((node) => node.type === 'Constructor');
  if (constructor) {
    console.log(constructor.params[0].pat.value);
  }
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
