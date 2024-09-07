/**
 * Typescript defines a special ambiguous type called `any`. 
 * 
 * This type is used to avoid typechecking errors and allow
 * a variable to be used in any way (as a callable, etc.).
 * 
 * If Typescript cannot infer a type from context, it will asign
 * the any type. This can be disabled with the compiler option: `noImplicitAny`.
 */
{
    let ambiguous: any;

    ambiguous = 'Hello World';

    console.log(ambiguous.toLowerCase());

    ambiguous = () => "Goodnight Moon";

    console.log(ambiguous());

    ambiguous = false;

    console.log(ambiguous ? 'yes': 'no');

    const s:string = ambiguous;
}