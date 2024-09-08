/**
 * Type aliases allow you to define a type and use it in multiple places with
 * convenience.
 */
{
    /**
     * special is an alias for a type that can allow one of two string values:
     * 'hello' and 'world'
     */
    type Special =  'hello' | 'world';

    let w: Special = 'world';

    let h: Special = 'hello';

    /**
     * we can even use type aliases to represent other existing types:
     */
    type NewString = string;

    const s: NewString = 'hello world';
}