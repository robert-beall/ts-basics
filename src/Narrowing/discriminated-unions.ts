/**
 * A Disciminated union in Typescript occurs when every type in a union
 * contains a common named property assigned a unique literal in each 
 * member type.
 */
{
    /** Let's start by creating a union of types for automobiles. */

    /**
     * 
     */
    interface Car {
        type: 'Car';
        model: string;
        seats: number;
    }

    interface Truck {
        type: 'Truck';
        model: string;
        capacity: number;
    }

    type Automobile = Car | Truck;

    const checkCapacity = (a: Automobile) => {
        if (a.type === 'Truck') {
            return a.capacity; // <-- typescript uses 'type' to discriminate between Car and Truck
        } 

        return 0;
    }
}