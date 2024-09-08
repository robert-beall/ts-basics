/**
 * Typescript allows you to reference specific numbers and strings in 
 * in a type definition.
 */
{
    /**
     * this value has a type that specifies that it can only be 
     * the string 'hello'
     */
    const valWithLiteralType: 'hello' = 'hello';

    /**
     * This isn't particularly useful when specifying single literals,
     * but becomes handy when introducing unions:
     * 
     * This type is a union of the three primary colors represented
     * as string literals.
     */
    type PrimaryColor = 'red' | 'green' | 'blue';

    const blue: PrimaryColor = 'blue';
    const green: PrimaryColor = 'green';
    const red: PrimaryColor = 'red';

    const colorSet: PrimaryColor[] = ['blue', 'green'];

    /**
     * The same can be done with number literals:
     * 
     * This type defines a binary digit of either 1 
     * or 0.
     */
    type BinaryDigit = 0 | 1;

    /**
     * This function uses BinaryDigit as a return type to specify that it 
     * only returns 1 or zero. 
     * 
     * @param input 
     * @returns 1 if even or 0 if odd
     */
    const isOddOrEven = (input: number): BinaryDigit => {
        // return 3; this throws an error as 1 and 0 are the only allowed return values
        return input % 2 ? 1 : 0; // this is allowable
    }

    /**
     * You can also combine literals with non-literal types.
     * 
     * This type represents a person's current age. If they
     * have passed away, their age is instead marked as
     * 'deceased'.
     */
    type Age = number | 'deceased';

    /**
     * This function takes a birth year and compares it with the
     * current year to determine the age of the person. 
     * 
     * The function assumes that if a person was born before
     * 1900, they have passed away, thus returning 'deceased'.
     * 
     * Both 'deceased' and number are valid under the type Age.
     * 
     * @param birthYear of a person
     * @returns a numeric age or 'deceased'
     */
    const currentAge = (birthYear: number): Age => {
        if (birthYear < 1900) {
            return 'deceased';
        }

        const currentYear = new Date().getFullYear();

        return currentYear - birthYear;
    }

    /**
     * You can specify boolean literals as well. This doesn't have much 
     * use, but it does illustrate the nature of the boolean type itself, 
     * which is a union of two literals (`true` | `false`).
     */
    type BooleanAlias = true | false;

    let bool: BooleanAlias = false;
    bool = true;

    /**
     * By default, typescript does not infer a literal when defining
     * an object like below. It assumes that message is of type `string`, 
     * not of literal type 'hello world'.
     * 
     * This is done because types are used to define both writing and reading
     * behavior. Typescript assumes that the message property of an object
     * may change.
     */
    const obj = { message: 'hello world' };

    obj.message = 'goodnight moon';

    /** 
     * This can cause problems when expecting literals. For example, this code 
     * causes an error: 
     * ```
     * const requestFunc = (url: string, method: 'GET' | 'POST') => {
     *  console.log('...');
     * }
     * 
     * const req = { url: 'www.google.com', method: 'GET' };
     * 
     * requestFunc(req.url, req.method); <-- throws an error as req.method is inferred to be string
     */

    const requestFunc = (url: string, method: 'GET' | 'POST') => {
        console.log({ url, method });
    }

    /**
     * The above error can be solved using type assertions in one of two places: 
     * 
     * 1. Type assertion in req object definition.
     */
    const req = { url: 'www.boogle.com', method: 'GET' as 'GET' };
    requestFunc(req.url, req.method); // this works as we add an assertion into the object

    /**
     * 2. Type assertion when passing method parameter into the function call.
     */
    const req2 = { url: 'www.tastebook.com', method: 'GET' };
    requestFunc(req2.url, req2.method as 'GET');

    /**
     * Alternatively, we can use `as const` to make the entire req object
     * to be type literals. `as const` works like `const` in javascript, but
     * for the type system, ensuring that all properties of an object are 
     * assigned the literal type.
     * 
     * Notice that the properties of `req3` are now readonly literals 'www.bitter.com'
     * and 'GET'. 
     */
    const req3 = { url: 'www.bitter.com', method: 'GET' } as const;
    requestFunc(req3.url, req3.method); // This passes!

    let strAsConst = 'hello' as const; // strAsConst must be literal value 'hello'
    // strAsConst = 'world'; <-- this throws a typechecking error
}