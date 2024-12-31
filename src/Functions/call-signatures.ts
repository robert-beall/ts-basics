/**
 * In Javascript, functions can have properties in addition to 
 * being callable, but function type expressions do not 
 * allow for declaring properties.
 * 
 * Instead, we write a call signature inside an object type 
 * to specify function properties.
 */
{
    /**
     * Let's define a type called MessageFunction and give it
     * a string property called `description` as well as a void
     * callable that takes a `string` param and returns `void`.
     */
    type MessageFunction = {
        description: string;
        (message: string): void; // <-- notice that call signatures use ':' instead of '=>'
    };

    const describeMyMessageFunction = (messenger: MessageFunction) => {
        console.log(messenger.description);
    }

    function consoleLogMessenger(message) {
        console.log(message);
    }

    consoleLogMessenger.description = 'This function logs a message to the console.';

    describeMyMessageFunction(consoleLogMessenger);
}