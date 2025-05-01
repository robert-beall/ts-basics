# [Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)
- [Functions](#functions)
  - [Function Type Expressions](#function-type-expressions)
  - [Call Signatures](#call-signatures)
  - [Constructor Signatures](#constructor-signatures)


## Function Type Expressions
A *function type expression* is similar in syntax to arrow function syntax, providing a simple way to describe a function:
```
type <Name> = (parameter: type, parameter: type) => <return_type>
```

## Call Signatures
In Javascript, functions can have properties in addition to being callable, but function type expressions **do not allow for declaring properties**.
  
Instead, we write a *call signature* inside an object type to specify function properties:

```
type <Object_Name> {
    (parameter: type): <return_type>;
}
```

## Constructor Signatures
Javascript functions can also be invoked with the `new` operator. Typescript refers to these functions as constructors as they are usually used to create new objects.

A call signature can be made into a construct signature by prefixing it with the `new` keyword:

```
type <object_name> = {
        new (parameter: type): <return_type>;
}
```