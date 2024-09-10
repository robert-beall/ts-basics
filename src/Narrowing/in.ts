/**
 * Javascript provides the `in` operator to check if an object contains a 
 * property with a name. Typescript takes this into account as a way to 
 * narrow potential types.
 */
{
    type apple = { seeds: number, juice?: string };
    type cherry = { pit: boolean };
    type orange = { pulp: boolean, juice?: string};

    const checkFruit = (fruit: apple | cherry) => {
        if ('pit' in fruit) {
            // this branch narrows fruit to a cherry
            console.log(fruit.pit);
        } else {
            // in this branch, fruit can only be an apple
            console.log(fruit.seeds);
        }
    }

    const sharedOptionalFruitCheck = (fruit: apple | cherry | orange) => {
        if ('juice' in fruit) {
            // Only narrows to apple and orange as both can have juice optionally.
            console.log(fruit);
        }
    }
}