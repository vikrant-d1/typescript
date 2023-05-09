### @Decorators
A decorator in TypeScript is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter. Decorators use the form @expression, where expression must evaluate to a function that will be called at runtime with information about the decorated declaration.

To enable experimental support for decorators, you must enable the experimentalDecorators compiler option either on the command line or in your tsconfig.json:

 "experimentalDecorators": true

```javascript
// tsconfig.json:
 {
  "compilerOptions": {
    "target": "ES5",
    "experimentalDecorators": true
  }
}
```

### differences between modules and namespaces ?

Here are some key differences between modules and namespaces in TypeScript:

Exporting and importing: Modules use the export keyword to make code available to other parts of an application, and the import keyword to import code from other modules. Namespaces use the export keyword to make code available outside of the namespace, but do not provide a built-in mechanism for importing code from other namespaces.

File-level scoping: Modules have file-level scoping, which means that variables, functions, and classes defined in a module are only accessible within that module unless explicitly exported. Namespaces do not have file-level scoping, so all entities within a namespace are visible to code outside of the namespace.

Multiple files: Modules can be split across multiple files, and can be imported and exported between files. Namespaces can also be split across multiple files, but require explicit references to the files in order to be used.

Compatibility: Modules are compatible with CommonJS, AMD, and other module systems, making it easy to integrate TypeScript code with existing codebases. Namespaces are not compatible with other module systems, so using namespaces can make it more difficult to integrate TypeScript code with other codebases.

In general, modules are recommended over namespaces in TypeScript, because they provide better scoping, are compatible with other module systems, and offer more advanced features like default exports and dynamic imports.


### JavaScript classes and TypeScript classes differences?

JavaScript classes and TypeScript classes are similar in many ways, but there are some important differences between them. Here are a few key differences

Type annotations: TypeScript has static type checking, which means that you can add type annotations to your class properties and methods to ensure that they are of the correct type. In JavaScript, there is no built-in support for type checking.

**Access modifiers:** TypeScript has access modifiers such as public, private, and protected, which allow you to control the visibility of class members. In JavaScript, there is no built-in support for access modifiers.

Interfaces and abstract classes: TypeScript has support for interfaces and abstract classes, which can be used to define contracts for classes and provide common functionality that can be shared by multiple classes. JavaScript has no built-in support for interfaces or abstract classes.

**Compile-time errors:** Because TypeScript is a statically-typed language, the TypeScript compiler can catch errors at compile-time, before you run your code. In JavaScript, errors may not be caught until runtime.

**Class-level decorators:** TypeScript has support for class-level decorators, which can be used to add functionality to a class at runtime. JavaScript has no built-in support for decorators.

Overall, TypeScript classes provide more powerful tools for creating complex and robust object-oriented code, with better type safety and modularity. However, JavaScript classes are still useful for simpler projects or for cases where you don't need the added features of TypeScript.







