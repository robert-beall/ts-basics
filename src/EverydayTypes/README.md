# Everyday Types
- [Everyday Types](#everyday-types)
  - [Primatives](#primatives)
  - [Arrays](#arrays)
    - [Example](#example)
  - [Any](#any)
  - [Type Annotations on Variables](#type-annotations-on-variables)
    - [Example](#example-1)
  - [Functions](#functions)
    - [Examples](#examples)
      - [Defining Parameter Types](#defining-parameter-types)
      - [Defining Return Type](#defining-return-type)
  - [Objects](#objects)
    - [Example](#example-2)
  - [Union Types](#union-types)
    - [Example](#example-3)
  - [Type Aliases](#type-aliases)
    - [Example](#example-4)

## Primatives
Javascript has 3 primitive types: 

* string
* number
* boolean. 
 
Typescript has corresponding types with the same names.

Capitalized *String*, *Number*, and *Boolean* correspond to separate, dedicated types in typescript that are rarely used.

## Arrays
Arrays can be specified by `type[]` (e.g. `number[]`).

Alternatively, you can define an array with `Array<type>`.

### Example
```
const a: string[] = ['hello', 'world'];
```

## Any
Typescript defines a special ambiguous type called `any`. 

This type is used to avoid typechecking errors and allow a variable to be used in any way (as a callable, etc.).

If Typescript cannot infer a type from context, it will asign the any type. This can be disabled with the compiler option: `noImplicitAny`.

## Type Annotations on Variables
Typescript allows you to specify a type explictly. Alternatively, if you do not specify a type, it will infer one based on usage. 

### Example

```
let a: string = "hello world";
```

## Functions
Typescript allows you to specify the types of both the inputs and outputs of functions. 

### Examples
#### Defining Parameter Types
```
function log(message: string) {
  ...
}
```

#### Defining Return Type
```
function greeting(): string {
  return 'hello, world!';
}
```

## Objects
The *object type* is used for any javascript value that has properties. To define an object type, we list all the object properties and their types. 

### Example
```
type MyObject = {
  name: string;
  age: number;
};
```

## Union Types
Typescripts basic types can be combined to create more complex types using a variety of different operators.

The union operator `|` allows us to combine types together, specifying that a value of the combined type can be any one of the combined member types.

### Example
```
// union type of string and number primitives
type Input = string | number;

let a: Input = 42;
let b: Input = "Hello, World!";
```

## Type Aliases
Type aliases allow you to define a type and use it in multiple places with convenience.

### Example
```
type EvenDigits = 0 | 2 | 4 | 6 | 8;

const Two: EvenDigits = 2;
let FourOr6: EvenDigits = 4;
```

