/**
 * Javascript allows any expression in conditionals. The expression
 * does not explicitly have to resolve to a boolean. Instead,
 * Javascript first coerces the expression into a boolean.
 */
{
    /** the following resolve to false: */
    const nAn = NaN;
    const zero = 0;
    const empty = "";
    const bigZero = 0n;
    const abyss = null;
    const unborn = undefined;

    if (!(nAn && zero && empty && bigZero && abyss && unborn)) {
        console.log('All of these are falsey!');
    }

    /** 
     * You can also coerce values to boolean with the Boolean() function
     * or the '!!' double boolean negation.
     * 
     * typescript infers this '!!' as a narrowed boolean literal true
     * whereas Boolean(...) is inferred as type boolean. 
     */
    const usingBoolean = Boolean('Hello World'); // <-- this is a boolean

    const usignDoubleBoolNegation = !!'Goodnight Moon' // <-- this is `true`

    /** 
     * This behavior can be leveraged to check for nulls, as typeof does not
     * return a 'null' string.
     */
    const getStringToLower = (str: string | null): string => {
        if (str) { // narrow from string | null to just string as null coerces to false
            return str.toLowerCase();
        }

        return 'null';
    }

    /**
     * It's worth noting that the above, while technically working,
     * is still error prone. Let's say we pass the method an empty string:
     */
    console.log(getStringToLower(''));

    /**
     * This outputs 'null' because an empty string is coerced to a boolean
     * false.
     */
}