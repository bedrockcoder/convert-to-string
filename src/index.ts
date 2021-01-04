const convertToString = (obj?: any): string => {
    if (typeof obj === 'string') {
        if (obj.includes("'")) {
            if (obj.includes('"')) {
                if (obj.includes('`')) {
                    return `'${obj.replace(/'/g, "\\'")}'`;
                }
                return `\`${obj}\``;
            }
            return `"${obj}"`;
        }
        return `'${obj}'`;
    } else if (typeof obj === 'number') {
        return obj.toString();
    } else if (Array.isArray(obj)) {
        let str = '[';
        obj.forEach(element => {
            str += `${convertToString(element)}, `;
        });
        return `${str.slice(0, -2)}]`;
    } else if (obj == null) {
        return `${obj}`;
    } else if (typeof obj === 'boolean') {
        return obj.toString();
    } else if (typeof obj === 'object') {
        let str = '{ ';
        Object.keys(obj).forEach(key => {
            const value = obj[key];
            str += `${key}: ${convertToString(value)}, `;
        });
        return `${str.slice(0, -2)} }`;
    } else if (typeof obj === 'function') {
        const isAsync = obj.toString().slice(0, 5) === 'async';
        const isArrowFunction = obj.toString().slice(isAsync ? 6 : 0, isAsync ? 14 : 8) !== 'function';
        if (isArrowFunction) {
            return obj.toString();
        } else {
            return `${isAsync ? 'async ' : ''}function ${obj.toString().slice(obj.toString().indexOf('('))}`;
        }
    } else {
        return obj.toString();
    }
};

if (typeof window === 'undefined') {
    module.exports = convertToString;
}
