/**
 * Typescript allows you to specify a type explictly. Alternatively,
 * if you do not specify a type, it will infer one based on usage. 
 */
{
    // Explicit type annotation
    const s: string = 'This is a string';

    // Type inference
    const str = 'This is also a string';

    /**
     * Reassigning this to a boolean throws an error
     */
    let onlyString: string = 'This should only be a string';

    // This throws a typechecking error
    onlyString = true;

    /**
     * As does this
     */
    let shouldBeOnlyString = 'This should only be a string, but...';

    shouldBeOnlyString = true;

}