


namespace MyNamespace {
    export const MY_CONSTANT = 42;
  
    export function myFunction(): void {
      console.log("Hello from MyNamespace!");
    }
  
    export class MyClass {
      constructor(private _name: string) {}
  
      public get name(): string {
        return this._name;
      }
  
      public set name(newName: string) {
        this._name = newName;
      }
  
      public sayHello(): void {
        console.log(`Hello, my name is ${this._name}`);
      }
    }
  }


  //second file

console.log(MyNamespace.MY_CONSTANT); // 42
MyNamespace.myFunction(); // "Hello from MyNamespace!"

const myObj = new MyNamespace.MyClass("John");
console.log(myObj.name); // "John"
myObj.sayHello(); // "Hello, my name is John"



// second example:

namespace Shapes {
    export class Rectangle {
      constructor(public width: number, public height: number) {}
  
      public getArea(): number {
        return this.width * this.height;
      }
    }
  
    export class Circle {
      constructor(public radius: number) {}
  
      public getArea(): number {
        return Math.PI * this.radius ** 2;
      }
    }
  }

  
// Third example:
  namespace MyModule {
    export interface Person {
      name: string;
      age: number;
    }
  
    export function sayHello(person: Person): void {
      console.log(`Hello, ${person.name}!`);
    }
  }


// use namespace file

namespace MyNamespace {
    export const MY_CONSTANT1 = 42;
  
    export function myFunction1(): void {
      console.log("Hello from MyNamespace!");
    }
  }


// myapp.ts

// import { MyNamespace } from "./MyNamespace";

console.log(MyNamespace.MY_CONSTANT1); // Output: 42
MyNamespace.myFunction1(); // Output: "Hello from MyNamespace!"




