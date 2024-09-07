/**
 * Typescripts basic types can be combined to create more complex types using a variety of 
 * different operators.
 * 
 * The union operator "|" allows us to combine types together, specifying that a value of 
 * the combined type can be any one of the combined member types.
 */
{
    /**
     * This type specifies that a value can either be a string or a number.
     */
    type StringNumber = string | number; 

    /**
     * We defined a value of this type and assign it to a 
     * string literal.
     */
    let strNum: StringNumber = 'Hello World';

    // This should output 'Hello World'
    console.log(strNum);

    // Next we assign it to a number. Notice no typechecking errors.
    strNum = 41;

    // This should output '42'
    console.log(strNum + 1);

    /**
     * Note, typescript will only allow an operation on a value of a
     * union type if that operation is valid for every member of the type.
     */
    const ouptutFunc = (param: StringNumber) => {
        /* This isn't valid as no such function exists for number. */ 
        // return param.toLowerCase();

        /* This is valid as `toString` exists for both number and string types. */
        // return param.toString();

        /* The solution is to narrow with typechecking: */
        typeof param === 'string' ? param.toLowerCase() : param.toFixed();
    }
}