module.exports = (object?: any): string => {
    if (typeof object === 'string') {
        if (object.includes("'")) {
            if (object.includes('"')) {
                if (object.includes('`')) {
                    return `'${object.replace(/'/g, "\\'")}'`;
                }
                return `\`${object}\``;
            }
            return `"${object}"`;
        }
        return `'${object}'`;
    } else if (typeof object === 'number') {
        return object.toString();
    } else if (Array.isArray(object)) {
        let str = '[';
        object.forEach(element => {
            str += `${module.exports(element)}, `;
        });
        return `${str.slice(0, -2)}]`;
    } else if (object == null) {
        return `${object}`;
    } else if (typeof object === 'boolean') {
        return object.toString();
    } else if (typeof object === 'object') {
        let str = '{ ';
        Object.keys(object).forEach(key => {
            const value = object[key];
            str += `${key}: ${module.exports(value)}, `;
        });
        return `${str.slice(0, -2)} }`;
    } else if (typeof object === 'function') {
        const isArrowFunction = object.toString().slice(0, 8) !== 'function';
        if (isArrowFunction) {
            return object.toString();
        } else {
            return `function ${object.toString().slice(object.toString().indexOf('('))}`;
        }
    } else if (typeof object === 'symbol') {
        return object.toString();
    }
    return '';
};
