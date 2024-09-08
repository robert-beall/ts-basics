/**
 * Typescript defines types that map onto javascripts primitive values
 * `null` and `undefined`, used to represent absent or uninitialized values.
 * 
 * How these types behave depend on whether the `strictNullChecks` is on.
 * 
 * With `strictNullChecks` off, a value of any type can be assigned to null
 * or undefined and values that might be null or undefined can be accessed
 * normally.
 */
{
    /**
     * With `strictNullChecks` on, a variable must be tested for a null or undefined
     * value before being accessed.
     */
    type BasicObject = { message?: string };

    const basicObj: BasicObject = { message: 'Hello World' };

    /** This line throws an error because basicObj.message may be undefined. */
    // const upperCaseMsg = basicObj.message.toUpperCase();

    /** This line does not throw an error, because we check for undefined. */
    const upperCaseMsg = typeof basicObj.message !== 'undefined' ? basicObj.message.toUpperCase() : '';

    /**
     * You can use the postfix ('!') operator to remove `null` or `undefined` from a type 
     * without explicit checking. Writing `!` after an expression is basically an assertion 
     * that the value is not null or undefined. 
     * 
     * This should only be used when you know the value is not null or undefined, like in 
     * the case of `basicObj`, where we have set the message property to a string.
     */
    const lowerCaseMsg = basicObj.message!.toLocaleLowerCase();
}   