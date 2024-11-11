
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
