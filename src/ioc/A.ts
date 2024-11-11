
function Decorator(target: { new (...args: any[]): any }) {
  console.log(target.toString());
}

@Decorator
export
class A {
  public constructor(
    private readonly a: number,
    private readonly b: number,
  ) { }

  public sum() {
    return this.a + this.b;
  }
}
