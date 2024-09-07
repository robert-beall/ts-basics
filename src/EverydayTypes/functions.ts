/**
 * Typescript allows you to specify the types of both the inputs and outputs of functions. 
 */
{
    /**
     * This function takes no parameters and returns nothing.
     */
    const voidFunc = (): void => {
        console.log('this is a void function');
    }

    /**
     * In this function, we specify a return type of string, meaning the 
     * function must return a string, or else a typechecking error will be thrown.
     * 
     * @returns string message
     */
    const stringFunc = (): string => {
        return 'This function returns a string';
    }

    /**
     * This function takes a parameter called message that is annotated as a string. 
     * 
     * NOTE: its return type is inferred to be `void`.
     * 
     * @param message string to output
     */
    const simpleParamFunc = (message: string) => {
        console.log(message);
    }

    /**
     * This simple function takes a string parameter and returns a number. 
     * 
     * @param message string to count the length of
     * @returns length of message
     */
    const paramsAndReturn = (message: string): number => {
        return message.length;
    }

    /**
     * This is an asynchronous version of the function above. It returns a 
     * Promise<number>.
     * 
     * @param message 
     * @returns length of message
     */
    const asyncFunctionWithReturn = async (message: string): Promise<number> => {
        return message.length;
    }

    /** 
     * Anonymous functions (From handbook): 
     * 
     * "When a function appears in a place where TypeScript can determine how it’s 
     * going to be called, the parameters of that function are automatically given 
     * types." 
     * */

    const arr = ['hello', 'world'];

    /**
     * We use the map function to iterate through array <i>arr</i> and then return a value
     * for each entry. Typescript infers both the parameter type (string) and return type
     * (number).
     */
    const numArr = arr.map((s) => {
        return s.length;
    })
}