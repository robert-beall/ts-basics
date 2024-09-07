/**
 * Arrays can be specified by either type[] (e.g. number[]).
 * 
 * Alternatively, you can define an array with Array<type>.
 */
{
    const arr: string[] = ['hello', 'world'];

    const arr2: Array<number> = [1, 2, 3];

    console.log(arr);
    console.log(arr2);
}