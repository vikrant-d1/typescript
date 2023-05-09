
// Generic Function

function reverse<T>(items: T[]): T[] {
    return items.reverse();
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const reversedNumbers = reverse(numbers);
  console.log(reversedNumbers); // [5, 4, 3, 2, 1]
  
  const strings1 = ["hello", "world"];
  const reversedStrings = reverse(strings1);
  console.log(reversedStrings); // ["world", "hello"]




//   Generic Class:

class Box<T> {
    private item: T;
    constructor(item: T) {
      this.item = item;
    }
    getItem(): T {
      return this.item;
    }
  }
  
  const boxOfNumbers = new Box<number>(42);
  console.log(boxOfNumbers.getItem()); // 42
  
  const boxOfStrings = new Box<string>("hello");
  console.log(boxOfStrings.getItem()); // "hello"



  
// Generic Interface:

interface Pair<T, U> {
    first: T;
    second: U;
  }
  
  const pairOfNumbersAndStrings: Pair<number, string> = { first: 42, second: "hello" };
  console.log(pairOfNumbersAndStrings); // { first: 42, second: "hello" }





// Generic Constraints:
  
  interface HasLength {
    length: number;
  }
  
  function getLength<T extends HasLength>(item: T): number {
    return item.length;
  }
  
  const stringLength = getLength("hello");
  console.log(stringLength); // 5
  
  const arrayLength = getLength([1, 2, 3]);
  console.log(arrayLength); // 3
  
  // This will fail because numbers don't have a `length` property:
  // const numberLength = getLength(42);
  
  



//   Default Type Parameters:

function identity<T = any>(value: T): T {
    return value;
  }
  
  const numberIdentity = identity<number>(42);
  console.log(numberIdentity); // 42
  
  const stringIdentity = identity("hello");
  console.log(stringIdentity); // "hello"
  
  const anyIdentity = identity(true);
  console.log(anyIdentity); // true

  



//   Generic Constraints with keyof:

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }
  
  const person = { name: "John Doe", age: 42 };
  const _name = getProperty(person, "name");
  console.log(_name); // "John Doe"
  
  const age = getProperty(person, "age");
  console.log(age); // 42
  
  // This will fail because "email" is not a property of `person`:
  // const email = getProperty(person, "email");



  

//   Using Generics with Classes:
  class Stack<T> {
    private items: T[] = [];
    push(item: T) {
      this.items.push(item);
    }
    pop(): T {
      return this.items.pop()!;
    }
    size(): number {
      return this.items.length;
    }
  }
  
  const stackOfNumbers = new Stack<number>();
  stackOfNumbers.push(1);
  stackOfNumbers.push(2);
  stackOfNumbers.push(3);
  console.log(stackOfNumbers.size()); // 3
  console.log(stackOfNumbers.pop()); // 3
  
  const stackOfStrings = new Stack<string>();
  stackOfStrings.push("hello");
  stackOfStrings.push("world");
  console.log(stackOfStrings.size()); // 2
  console.log(stackOfStrings.pop()); // "world"
  
  



//   Generics with Union Types:

function formatStringOrNumber<T extends string | number>(value: T): string {
    if (typeof value === "number") {
      return value.toFixed(2);
    } else {
      return value.toUpperCase();
    }
  }
  
  const formattedString = formatStringOrNumber("hello");
  console.log(formattedString); // "HELLO"
  
  const formattedNumber = formatStringOrNumber(3.14159);
  console.log(formattedNumber); // "3.14"



  
//   Mapped Types with Generics:

type Optional<T> = {
    [K in keyof T]?: T[K];
  }
  
interface Person1 {
    name: string;
    age: number;
  }
  
  const optionalPerson: Optional<Person1> = { name: "John Doe" };
  console.log(optionalPerson); // { name: "John Doe" }
  
  // This will fail because "email" is not a property of `Person`:
  // const optionalPerson2: Optional<Person> = { name: "Jane Smith", email: "jane@example.com" };

  


// call api with Generic

interface User {
  id: number;
  name: string;
  email: string;
}

async function fetchUsers<T>(): Promise<T[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data;
}

// Usage:
// const users = await fetchUsers<User>();
// console.log(users); // Array of User objects