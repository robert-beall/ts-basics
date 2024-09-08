/**
 * Interfaces are similar to object type definitions with a 
 * slight difference in syntax. Interfaces can also be extended,
 * whereas a type alias cannot.
 */
{
    /**
     * This is a simple interface.
     */
    interface BasicObject {
        message: string;
        length: number;
        active: boolean;
    }

    /**
     * This interface extends the BasicObject interface.
     */
    interface ExtendedObject extends BasicObject {
        description: string;
        tags: string[];
    }

    /**
     * Define an instance of ExtendedObject.
     */
    const extendedObj: ExtendedObject = {
        message: 'hello world',
        length: 42,
        active: true,
        description: 'This is a description for my object',
        tags: ['obj', 'extended']
    }

    /**
     * I can assign extendedObj to a value of type BasicObject
     * because interface ExtendedObject `extends` BasicObject.
     */
    const basicObj: BasicObject = extendedObj;
    
    /**
     * I can also add fields to an existing interface.
     */
    interface BasicObject {
        id: string;
    }

    /**
     * Now BasicObject requires property `id`.
     */
    const basicNew: BasicObject = {
        message: 'Goodnight Moon',
        length: 19,
        active: true,
        id: '90210'
    };
}