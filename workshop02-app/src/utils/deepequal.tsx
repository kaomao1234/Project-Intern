type ObjectType = { [key: string]: any };
function deepEqual(obj1: ObjectType, obj2: ObjectType): boolean {
    // Check if both values are objects
    if (
        typeof obj1 === "object" &&
        typeof obj2 === "object" &&
        obj1 !== null &&
        obj2 !== null
    ) {
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);

        // Check if the number of keys is the same
        if (keys1.length !== keys2.length) {
            return false;
        }

        // Iterate over the keys of obj1
        for (let key of keys1) {
            // Check if the key exists in obj2
            if (!obj2.hasOwnProperty(key)) {
                return false;
            }

            // Recursive call to compare nested properties
            if (!deepEqual(obj1[key], obj2[key])) {
                return false;
            }
        }

        return true;
    }

    // Compare the values directly
    return obj1 === obj2;
}
export default deepEqual;