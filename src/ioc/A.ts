
function Decorator<T extends { new (...args: any[]): { sum: () => number } }>(target: T) {
  return class extends target {
    public sumString() {
      return this.sum().toString();
    }
  };
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

const a = new A(1, 2);
