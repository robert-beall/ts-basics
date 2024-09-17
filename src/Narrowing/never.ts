/**
 * "never" represents a union state which should not exist. This
 * impossible state is a union that has been narrowed so as to 
 * exclude all member types.
 */
{
    /**
     * Let's start by defining a union of the main typescript
     * primitives. 
     */
    type Prims = string | number | boolean;

    /**
     * Next we define a method that prints the type of
     * the passed Prim using a switch statement. By the 
     * time we get to the default case, all union members
     * have been elminated, so Prims is assigned never - a
     * state that cannot be.
     * 
     * @param prim 
     */
    const checkPrimitive = (prim: Prims) => {
        switch (typeof prim) {
            case 'string': 
                console.log(`${prim} is a string`);
                break;
            case 'boolean':
                console.log(`${prim} is a boolean`);
                break;
            case 'number': 
                console.log(`${prim} is a number`);
                break;
            default:
                console.log(`${prim} is never`); // <-- prim cannot be any other type, so it is never
        }
    }
}