/**
 * The </i>object type</i> is used for any javascript value that has properties.
 * 
 * To define an object type, we list all the object properties and their types.
 */
{
    /**
     * We define an object type with a string message and a number length.
     */
    type BasicObject = {
        message: string;
        length: number;
    }

    /**
     * Here is an instance of basic object with properties matching the type
     * definition.
     */
    const basicObjectExample: BasicObject = {
        message: 'Hello World',
        length: 42,
    };

    /**
     * This object throws a typechecking error because it does not contain all the properties
     * we defined in BasicObject.
     */
    const badObject: BasicObject = {
        message: 'hello world'
    }

    /**
     * This object type makes length an optional property, meaning it isn't required for
     * objects of this type.
     */
    type ObjectWithOptionals = {
        message: string;
        length?: number;
    }

    /**
     * This object is missing property length, just like `badObject`, but because
     * ObjectWithOptionals type makes length optional, a typechecking error is not 
     * thrown.
     */
    const goodOptionalObject: ObjectWithOptionals = {
        message: 'goodnight moon'
    }

    /**
     * While length is optional for ObjectWithOptionals, it still must be 
     * of type `number` if included. This object throws an error because
     * length is a string in this object.
     */
    const badOptionalObject: ObjectWithOptionals = {
        message: 'goodnight moon',
        length: '42'
    }

    /**
     * When accessing an optional property, you must check for undefined, as the 
     * property cannot be confirmed to exist on the object.
     */
    if (typeof goodOptionalObject.length !== 'undefined') {
        console.log(goodOptionalObject.length + 1);
    }
}