/**
 * Javascript functions can also be invoked with the `new` operator. 
 * Typescript refers to these functions as constructors as they are
 * usually used to create new objects.
 * 
 * A call signature can be made into a construct signature by prefixing
 * it with the `new` keyword.
 */
{
    type DateConstructor = {
        name: string;
        new (s: string): Date;
    }

    function dateFactory(s: string) {
        return new Date(s);
    }

    const d = dateFactory('12/1/2024');

}