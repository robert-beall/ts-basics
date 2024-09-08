/**
 * There are some less common primitives that are also defined
 * in Javascript.
 */
{
    /**
     * The bigint type pairs with the ES2020 BigInt primitive 
     * used to represent very large integers.
     */
    const bI: bigint = BigInt(1000);

    /**
     * The symbol primitive creates a globally unique reference 
     * via the function `Symbol()`.
     */
    const s1 = Symbol('world');
    const s2 = Symbol('world');

    if (s1 === s2) {
        console.log('This should not happen as s1 and s2 are unique symbols with no overlap');
    }
}