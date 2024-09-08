/**
 * Type assertions allow us to convert to a more or less specific type based on 
 * information we are privy to, but Typescript is not. 
 */
{
    interface BasicObject {
        message: string;
    }

    interface ExtendedObject extends BasicObject{
        id: string;
        length: number;
    }

    const returnBasicObject = (obj: BasicObject): BasicObject => {
        return obj;
    };

    let aObject: ExtendedObject = {
        message: 'Hello World',
        id: 'abcd',
        length: 21
    }

    // This throws an error:
    /** let bObject: ExtendedObject = returnBasicObject(aObject); */

    // we convert to a more specific type to avoid this error:
    let bObject: ExtendedObject = returnBasicObject(aObject) as ExtendedObject;

    console.log(bObject);
}