// get and set 

class Person {
    private _name: string;
    private _age: number;
  
    constructor(name: string, age: number) {
      this._name = name;
      this._age = age;
    }
  
    get name(): string {
      return this._name;
    }
  
    set name(newName: string) {
      this._name = newName;
    }
  
    get age(): number {
      return this._age;
    }
  
    set age(newAge: number) {
      if (newAge < 0) {
        throw new Error("Age cannot be negative");
      }
      this._age = newAge;
    }
  }
  
  const john = new Person("John", 30);
  console.log(john.name); // "John"
  console.log(john.age); // 30
  
  john.name = "Johnny";
  john.age = -5; // throws an error
  
  console.log(john.name); // "Johnny"
  console.log(john.age); // 30



// use implements with interface

interface Animal {
    name: string;
    makeSound(): void;
  }
  
  class Dog implements Animal {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    makeSound(): void {
      console.log("Woof!");
    }
  }
  
  const myDog = new Dog("Rufus");
  console.log(myDog.name); // "Rufus"
  myDog.makeSound(); // "Woof!"



  



  





