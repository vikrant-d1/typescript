import { MY_CONSTANT, myFunction, MyClass } from "./myModule";

console.log(MY_CONSTANT); // Output: 42
myFunction(); // Output: "Hello from myModule!"

const myInstance = new MyClass("Hello from myInstance!");
myInstance.logMessage(); // Output: "Hello from myInstance!"
