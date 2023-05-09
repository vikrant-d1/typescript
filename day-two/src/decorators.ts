import "reflect-metadata";


// Decorator Factories 

function logData(prefix: string) {
  return function(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
      console.log(`[${prefix}] Calling ${key} with arguments: ${JSON.stringify(args)}`);
      const result = originalMethod.apply(this, args);
      console.log(`[${prefix}] ${key} returned: ${JSON.stringify(result)}`);
      return result;
    };
    return descriptor;
  };
}

class ModifiedProperty {
  @logData("FactoriesExample")
  method(arg1: string, arg2: number) {
    console.log("method called");
    return `arg1=${arg1}, arg2=${arg2}`;
  }
}

const example = new ModifiedProperty();
example.method("hello", 42);

// [Example] Calling method with arguments: ["hello",42]
// method called
// [Example] method returned: "arg1=hello, arg2=42"



// Class Decorators

// @log decorator: adds a log message when a method is called.
function log(target: any, key: string, descriptor: PropertyDescriptor) {
  console.log('check data',descriptor);
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
      console.log(`[${new Date().toISOString()}] ${target.constructor.name}.${key}(${args})`);
      return originalMethod.apply(this, args);
    };
    return descriptor;
  }
  
  class CreateLogs {
    @log
    method() {
      console.log("method called");
    }
  }
  
  const logs = new CreateLogs();
  logs.method(); // [2023-04-26T00:00:00.000Z] logs.method()
  

// @memoize decorator: memoizes the result of a function call to improve performance.
function memoize(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const cache = new Map();
    descriptor.value = function(...args: any[]) {
      const cacheKey = JSON.stringify(args);
      if (cache.has(cacheKey)) {
        return cache.get(cacheKey);
      }
      const result = originalMethod.apply(this, args);
      cache.set(cacheKey, result);
      return result;
    };
    return descriptor;
  }
  
  class Memoizes {
    @memoize
    expensiveMethod(input: number) {
      console.log(`calculating for ${input}`);
      return input * 2;
    }
  }
  
  const _memoizes = new Memoizes();
  console.log(_memoizes.expensiveMethod(1)); // calculating for 1, 2
  console.log(_memoizes.expensiveMethod(1)); // 2 (cached)
  console.log(_memoizes.expensiveMethod(2)); // calculating for 2, 4


  //@validate decorator: validates the arguments of a method before calling it.

  function validate(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
      const paramTypes = Reflect.getMetadata("design:paramtypes", target, key);
      for (let i = 0; i < args.length; i++) {
        if (paramTypes[i] && !(args[i] instanceof paramTypes[i])) {
          throw new Error(`Argument ${i} is not of type ${paramTypes[i].name}`);
        }
      }
      return originalMethod.apply(this, args);
    };
    return descriptor;
  }
  
  class ValidateInput {
    @validate
    method(input: string) {
      console.log(`method called with ${input}`);
    }
  }
  
  const validation = new ValidateInput();
  validation.method("hello"); // method called with hello
  // validation.method(123); throws "Argument 0 is not of type String"


// @readonly decorator: marks a property as read-only.
function readonly(target: any, key: string) {
    Object.defineProperty(target, key, {
      writable: false,
      configurable: false
    });
  }
  
  class MakeReadOnly {
    @readonly
    readonlyProperty = "read-only";
  }
  
  const _readOnlyInput = new MakeReadOnly();
  console.log(_readOnlyInput.readonlyProperty); // read-only
  _readOnlyInput.readonlyProperty = "changed"; // TypeError: Cannot assign to read only property 'readonlyProperty' of object '#<MakeReadOnly>'


  //@measureTime decorator: measures the time it takes to execute a method.

  function measureTime(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
      const startTime = performance.now();
      const result = originalMethod.apply(this, args);
      const endTime = performance.now();
      console.log(`Execution time for ${key}: ${endTime - startTime} ms`);
      return result;
    };
    return descriptor;
  }
  
  class Performance {
    @measureTime
    method() {
      console.log("method called");
      for (let i = 0; i < 1000000000; i++) {}
    }
  }
  
  const _performance = new Performance();
  _performance.method(); // method called, Execution time for method: 1221.2499999999998 ms
  
  
   
  // Method Decorators

  function benchmark(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
      const startTime = performance.now();
      const result = originalMethod.apply(this, args);
      const endTime = performance.now();
      console.log(`Execution time for ${key}: ${endTime - startTime} ms`);
      return result;
    };
    return descriptor;
  }
  
  class  MethodDecorators {
    @benchmark
    method() {
      console.log("method called");
      for (let i = 0; i < 1000000000; i++) {}
    }
  }
  
  const methodDecorators = new MethodDecorators();
  methodDecorators.method(); // method called, Execution time for method: 1221.2499999999998 ms


  //Accessor Decorators
  function configurable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      descriptor.configurable = value;
    };
  }
  

  class Point {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
      this._x = x;
      this._y = y;
    }
   
    @configurable(false)
    get x() {
      return this._x;
    }
   
    @configurable(false)
    get y() {
      return this._y;
    }
  }


//Property Decorators

class Greeter {
  @format("Hello, %s")
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    let formatString = getFormat(this, "greeting");
    return formatString.replace("%s", this.greeting);
  }
}


const formatMetadataKey = Symbol("format");
function format(formatString: string) {
  return Reflect.metadata(formatMetadataKey, formatString);
}
function getFormat(target: any, propertyKey: string) {
  return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}


  
  
  
