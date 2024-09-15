/**
 * This file is not specifically typescript related, 
 * but instead dives into NodeJS assert functions. This
 * is a concept I'm somewhat unfamiliar with, so 
 * I'm going to dive in for a better understanding.
 * 
 * Put simply, assert functions provide a way to test
 * expressions, terminating a program if the assertion
 * expression is false.
 */
import assert, { AssertionError } from 'node:assert';

{
    /** assert (same as assert.ok()) */
    const checkBool = (tf: boolean) => {
        try {
            assert(tf);
            /**
             * Note that the type of tf after the assert is narrowed to the boolean
             * literal `true`.
             */
            console.log(tf); // <-- prints boolean value only if it is true
        } catch (e) {
            console.error((e as AssertionError).code);
        }
    }

    // Causes an assertion error
    checkBool(false);

    /**
     * `assert.strictEqual(a, b)` checks if two values `a` and `b`
     * are equal using the `===` operator.
     * 
     * 
     * 
     * NOTE: Use this instead of `assert.equal(a, b)` as the latter
     * can have unexpected results from not also checking type.
     */
    const checkEqual = (a: 'cool' | 'beans', b: 'java' | 'beans') => {
        try {
            assert.strictEqual(a, b);
            console.log(`${a} === ${b}`); // <-- Note that only `a` has its type narrowed.

            assert.strictEqual(b, a);
            console.log(`${b} === ${a}`); // <-- Now both are narrowed to 'beans'
        } catch (e) {
            console.error((e as AssertionError).code);
        }
    }

    checkEqual('beans', 'beans');

    interface sauce {
        name: string,
        ingredients: string[],
    };

    interface steak {
        cut: 'ribeye' | 'filet' | 'sirloin' | 'skirt',
        temp: 'rare' | 'medium-rare' | 'medium' | 'well-done',
        sauce?: sauce,
    }

    /**
     * `assert.deepStrictEquals(a, b)` checks for deep equality using the
     * `===` operator. 
     * 
     * Deep equality applies to object properties and subproperties. 
     */
    const checkDeepEquals = (a: steak, b: steak) => {
        try { 
            assert.deepStrictEqual(a, b);
            assert.deepStrictEqual(b, a);

            console.log(`${a.cut} ${a.temp} === ${b.cut} ${b.temp}`);
        } catch (e) {
            console.error((e as AssertionError).code);
        }
    }

    /**
     * ribeye is the first steak we will define.
     */
    const ribeye: steak = {
        cut: 'ribeye',
        temp: 'medium-rare',
        sauce: {
            name: 'tiger dill',
            ingredients: ['sour cream', 'dill', 'horseradish']
        }
    }

    /**
     * tomahawk is the second steak we will define. It is 
     * identical to ribeye.
     */
    const tomahawk: steak = {
        cut: 'ribeye',
        temp: 'medium-rare',
        sauce: {
            name: 'tiger dill',
            ingredients: ['sour cream', 'dill', 'horseradish']
        }
    }

    const filet: steak = {
        cut: 'filet',
        temp: 'rare',
        sauce: {
            name: 'blue cheese',
            ingredients: ['blue cheese', 'mayonaise']
        }
    }

    checkDeepEquals(ribeye, tomahawk);
    checkDeepEquals(ribeye, filet);

    /** `assert.fail(...)` throws an assertion error */
    const failWithError = (a: 'apple' | 'orange') => {
        try { 
            if (a === 'apple') {
                assert.fail('BAD APPLE');
            }

            console.log(a); // <-- Notice typescript narrows to 'orange' because of control flow analysis
        } catch (e) {
            console.error((e as AssertionError).message);
        }
    }

    failWithError('orange'); // won't trigger failure
    failWithError('apple'); // will trigger assertion error with message 'BAD APPLE'

    /**
     * NOTE: There are other assertion methods, but these are the ones most likely
     * to be encountered day-to-day. If need be, I can do a deeper dive later.
     */
}