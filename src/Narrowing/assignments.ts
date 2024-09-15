/**
 * Typescript uses the right side of an assignment to determine a value's 
 * type in absence of an explicit assignment. This is a form of narrowing
 * as Typescript uses the types of the assigned value to outline the type
 * limits of an assigned variable. 
 */
{
    /**
     * Looking at the variable `strOrNum`, depending on the
     * random value, it can be either a string or a number. 
     * 
     * As such, Typescript assigns it the union type `string | number`. 
     */
    let strOrNum = Math.random() % 2 === 0 ? 'even' : 1;

    // this is a valid assignment
    strOrNum = 5;

    // so is this
    strOrNum = 'Hello there';

    /**
     * Note that is we use the `const` keyword instead of 
     * `let`, the behavior changes and Typescript narrows
     * the types even further to literals `'even' | 1`;
     * 
     * This is because a constant cannot change, so no string
     * other than 'even' will be assigned to the value, and no
     * number other than 1 will be assigned.
     */
    const strOrNumConst = Math.random() % 2 === 0 ? 'even' : 1;
}