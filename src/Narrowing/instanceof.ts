/**
 * NOTE: I'm a bit rusty with object oriented javascript, so I'm going to start
 * with a little review of the `prototype` and `prototype chain` concepts along
 * with vanilla Javascript usage of instance of.
 * 
 * Prototype: A prototype in JavaScript is an object that serves as a template 
 * for creating other objects. Every JavaScript object has a prototype, which 
 * defines the object's properties and methods.
 * 
 * Prototype exists as a built-in property for every object in js.
*  This prototype is itself an object with its own prototype, creating 
*  a chain until we reach a prototype that has `null` for its own
*  prototype.
 * 
 * The `instanceof` keyword checks whether a value is an "instance of" 
 * another value. More specifically `x instanceof Foo` checks if an Object x
 * contains Foo.Prototype in its prototype chain.
 */
{
    /**
     * Let's first define a class `A`. This 
     * will be a basic class with two properties:
     * 
     * `msg`: a string to display
     * 
     * `length`: the length of the message.
     */
    class A {
        msg: string; 

        length: number; 

        constructor(msg: string, length: number) {
            this.msg = msg;
            this.length = length;
        }
    }

    /**
     * Now let's define a class B that extends A. This class
     * has an additional property called sender. 
     */
    class B extends A {
        sender: string; 

        constructor(sender: string, msg: string, length: number) {
            super(msg, length);

            this.sender = sender;
        }
    }

    // let's define a new instance of B
    const b = new B('Robert Beall', 'Hello World', 23); 

    // b is an instance of A because B extends a
    console.log(b instanceof A);

    /**
     * Let's define a third class C that extends B.
     */
    class C extends B {
        metadata: Record<string, string>;

        constructor(metadata: Record<string, string>, ...args: [string, string, number]) {
            super(...args);

            this.metadata = metadata;
        }
    }

    /**
     * Here we can view the prototype chain: 
     * A --> {}
     * B --> A {}
     * C --> B {}
     */
    console.log(A.prototype);
    console.log(B.prototype);
    console.log(C.prototype);

    /** `instanceof` can also be used as a typeguard */
    const isDate = (input: string | number | Date): boolean => {
        if (input instanceof Date) {
            console.log(input); // <-- narrowed to Date
            return true;
        }

        console.log(input); // <-- narrowed to string | number
        return false;
    };
}