 // update for nested attributes 
export const updateNestedProperty = (obj, path, value) => {
    const keys = path.split('.');
    // where the update should take place 'address.name' = [name] after pop() operation
    const lastKey = keys.pop();
    const deepClone = { ...obj };

    let current = deepClone;
    keys.forEach(key => {
        if (!current[key]) {
            current[key] = {};
        }
        current = current[key];
    });

    current[lastKey] = value;
    return deepClone;
};