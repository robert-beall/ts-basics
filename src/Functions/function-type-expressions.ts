/**
 * A function type expression is similar in syntax to arrow function
 * syntax, providing a simple way to describe a function.
 */
{
    type Code = 'INFO' | 'ERROR' | 'WARNING';

    /**
     * Let's define a function type for logging messages.
     * 
     * A function of this type takes two parameters (code, message) and
     * has a return type of void. 
     * 
     * Notice that this expression has two parts: parameter definitions and return
     * type. With this, we specify the inputs and outputs of a function while leaving
     * implementation open to individual developers.
     */
    type Messenger = (code: Code, message: string) => void;

    /**
     * Next we'll define a function that takes a function of typeMessenger 
     * as a parameter and calls it.
     */
    const infoLog = (messenger: Messenger, message: string) => {
        messenger('INFO', message);
    }

    // next we call infoLog, passing a function that matches the function type of Messenger
    infoLog((code: Code, message: string) => console.log(`${code}: ${message}`), 'hello world');
}