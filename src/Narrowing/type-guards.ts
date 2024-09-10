/**
 * A type guard is a special check, usually in a conditional block,
 * that narrows the type to a greater level of specificity.
 */
{
    /**
     * This function features an example of a typeguard used to narrow
     * down the type of the first parameter to check for cases where
     * it is a string or number.
     */
    const getLength = (val: string | number) => {
        if (typeof val === 'string') {
            return val.length;
        }

        return val;
    }

    /* Types of Type Guards */

    /**
     * Javascript provides a `typeof` operator that typescript uses as a type guard. 
     */
    let chameleonVariable: any = 'hello';

    if (typeof chameleonVariable === 'string') {
        console.log(chameleonVariable.toUpperCase());
    }

    chameleonVariable = 2; 

    if (typeof chameleonVariable === 'number') {
        console.log(chameleonVariable * 2);
    }

    chameleonVariable = BigInt(100);

    if (typeof chameleonVariable === 'bigint') {
        console.log(chameleonVariable - BigInt(2));
    }

    chameleonVariable = true;

    if (typeof chameleonVariable === 'boolean') {
        console.log(chameleonVariable ? 'yes' : 'no');
    }

    chameleonVariable = Symbol('changeling');

    if (typeof chameleonVariable === 'symbol') {
        console.log(chameleonVariable.description);
    }

    chameleonVariable = undefined;

    if (typeof chameleonVariable === 'undefined') {
        console.log('Oops!');
    }

    chameleonVariable = {
        message: 'Hello there!'
    }

    if (typeof chameleonVariable === 'object') {
        console.log(chameleonVariable.message);
    }

    chameleonVariable = () => 'Goodnight Moon';

    if (typeof chameleonVariable === 'function') {
        console.log(chameleonVariable());
    }

    
}