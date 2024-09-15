import assert from 'node:assert';

/**
 * In typescript, developers can also define their own
 * custom type predicates. 
 */
{
    interface Human {
        name: string;
        soul: boolean;
    };

    interface Toaster {
        product_name: string;
        burner_lvl: number;
        springs: number;
        watts: number;
    };

    /**
     * This function is a custom type predicate. The
     * return type `obj is Human` allows typescript to
     * narrow the type of an object to type Human if the
     * method returns true. 
     * 
     * @param obj 
     * @returns 
     */
    const isHuman = (obj: any): obj is Human => {
        const objCoerced = obj as Human; 
        return typeof objCoerced.name !== 'undefined' && typeof objCoerced.soul !== 'undefined';
    }

    const testFunc = (option: Human | Toaster) => {
        if (isHuman(option)) {
            console.log(option.name); // <-- narrowed to type 'HUMAN'
        } else {
            console.log('Option is a toaster');
        }
    }

    const person: Human = {
        name: 'Robert Beall',
        soul: true,
    };

    testFunc(person);

    const toaster: Toaster = {
        product_name: 'SuperToaster',
        burner_lvl: 3,
        springs: 2,
        watts: 200,
    };

    testFunc(toaster);

    /**
     * Typescript can also use assertion functions to narrow types. 
     * 
     * For more information on assertion functions: [assert docs](https://nodejs.org/api/assert.html)
     */
    const assertionTypeCheck = (param1: string | number, param2: number |boolean) => {
        assert(typeof param1 === 'number');
        assert(typeof param2 === 'number');

        console.log(param1 + param2); // <-- types for param1 & param2 are narrowed to number
    }
}