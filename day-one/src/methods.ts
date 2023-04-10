
  // type Person = {
  //   name: string;
  //   age: number;
  // };
   
  // function greet(person: Person) {
  //   return "Hello " + person.name;
  // }


// interface PaintOptions {
//     shape: Shape;
//     xPos?: number;
//     yPos?: number;
//   }
   
//   function paintShape(opts: PaintOptions) {
//     // ...
//   }
   
  // const shape = getShape();
  // paintShape({ shape });
  // paintShape({ shape, xPos: 100 });
  // paintShape({ shape, yPos: 100 });
  // paintShape({ shape, xPos: 100, yPos: 100 });



interface Person {
    name: string;
    age: number;
  }
   
  interface ReadonlyPerson {
    readonly name: string;
    readonly age: number;
  }
   
  let writablePerson: Person = {
    name: "Person McPersonface",
    age: 42,
  };
   
  // works
  let readonlyPerson: ReadonlyPerson = writablePerson;
   
  console.log(readonlyPerson.age); // prints '42'
  writablePerson.age++;
  console.log(readonlyPerson.age); // prints '43'



  interface AddressWithUnit {
    name?: string;
    unit: string;
    street: string;
    city: string;
    country: string;
    postalCode: string;
  }


  interface BasicAddress {
    name?: string;
    street: string;
    city: string;
    country: string;
    postalCode: string;
  }
   
  interface AddressWithUnit extends BasicAddress {
    unit: string;
  }

// multiple extends
  interface Colorful {
    color: string;
  }
   
  interface Circle {
    radius: number;
  }
   
  interface ColorfulCircle extends Colorful, Circle {}
   
  const cc: ColorfulCircle = {
    color: "red",
    radius: 42,
  };


  //functions
  type GreetFunction = (a: string) => void;

  function greeter(fn: GreetFunction) {
    // ...
  }
  


  
  function add(x: number, y: number): number {
      return x + y;
    }
  
  
  const multiply = (x: number, y: number): number => x * y;
  
  
  interface Person {
      name: string;
      age: number;
    }
     
    function greet(person: Person) {
      return "Hello " + person.name;
    }



function f(x?: number) {
        // ...
      }
      f(); // OK
      f(10); // OK


      