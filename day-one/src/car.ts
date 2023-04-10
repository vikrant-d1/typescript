// interface Car {
//     make: string;
//     model: string;
//     year: number;
//     start(): void;
//     stop(): void;
//   }

//assign value in the variable
// let myCar: Car = {
//     make: "Honda",
//     model: "Civic",
//     year: 2021
//   }

class Car {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    start() {
      console.log(`Starting ${this.make} ${this.model} ${this.year}`);
    }
  
    stop() {
      console.log(`Stopping ${this.make} ${this.model} ${this.year}`);
    }
  }
  
  let myCar = new Car("Honda", "Civic", 2021);
  myCar.start();
  myCar.stop();
