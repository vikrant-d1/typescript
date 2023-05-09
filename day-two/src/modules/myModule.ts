export const MY_CONSTANT = 42;

export function myFunction(): void {
  console.log("Hello from myModule!");
}

export class MyClass {
  constructor(public message: string) {}

  public logMessage(): void {
    console.log(this.message);
  }
}
