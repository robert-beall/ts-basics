/**
 * Typescript also uses switch statements and equality statements
 * (`===`, `!==`, `==`, `!=`) to narrow types. 
 */
{   
    /**
     * This example is taken from the handbook.
     */
    function equalsExample(x: string | number, y: string | boolean) {
        /**
         * if x === y, then it means x and y not only have the same values,
         * but the same primitive type, meaning that x and y are both narrowed
         * to string type by typescript.
         */
        if (x === y) {
            console.log(typeof x);
            console.log(typeof y);
        } 
    }

    /**
     * Javascript's looser comparisons (`==` and `!=`) also get narrowed correctly.
     * This is especially useful when checking either null or undefined, as doing so
     * covers both. 
     */
    const testNull = (param: string | number | undefined) => {
        if (param == null) {
            console.log('is null');
        } else {
            // this is narrowed to a string or a number type
            console.log(param);
        }
    }

    /**
     * Likewise: 
     */
    const testUndefined = (param: string | boolean | null) => {
        if (param == undefined) {
            console.log('is undefined');
        } else {
            // this is narrowed to a string or a boolean type
            console.log(param);
        }
    }
}