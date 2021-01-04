interface Options {
    defaultString?: 'single-quotes' | 'double-quotes' | 'backticks';
    spacesAfterComma?: number;
}

const convertToString = (obj?: unknown, options?: Options): string => {
    const generateSpace = (spaceCount: number) => {
        let spaces = '';
        for (let i = 0; i < spaceCount; i++) {
            spaces += ' ';
        }
        return spaces;
    };

    if (!options) options = { defaultString: 'single-quotes', spacesAfterComma: 1 };
    if (!options.defaultString) options.defaultString = 'single-quotes';
    if (options.spacesAfterComma == null) options.spacesAfterComma = 1;
    options.spacesAfterComma = Math.round(options.spacesAfterComma);
    if (options.spacesAfterComma < 0) {
        throw new Error('options.spacesAfterComma must be a positive integer');
    }

    if (typeof obj === 'string') {
        if (options.defaultString === 'single-quotes') {
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
        } else if (options.defaultString === 'double-quotes') {
            if (obj.includes('"')) {
                if (obj.includes("'")) {
                    if (obj.includes('`')) {
                        return `"${obj.replace(/"/g, '\\"')}"`;
                    }
                    return `\`${obj}\``;
                }
                return `'${obj}'`;
            }
            return `"${obj}"`;
        } else {
            if (obj.includes('`')) {
                if (obj.includes("'")) {
                    if (obj.includes('"')) {
                        return `\`${obj.replace(/`/g, '\\`')}\``;
                    }
                    return `\"${obj}\"`;
                }
                return `'${obj}'`;
            }
            return `\`${obj}\``;
        }
    } else if (typeof obj === 'number') {
        return obj.toString();
    } else if (Array.isArray(obj)) {
        let str = '[';
        obj.forEach(element => {
            str += `${convertToString(element, options)},${generateSpace(<number>options!.spacesAfterComma)}`;
        });
        return `${str.slice(0, (options.spacesAfterComma + 1) * -1)}]`;
    } else if (obj == null) {
        return `${obj}`;
    } else if (typeof obj === 'boolean') {
        return obj.toString();
    } else if (typeof obj === 'object') {
        let str = '{ ';
        Object.keys(<{ [key: string]: unknown; }>obj).forEach(key => {
            const value = (<{ [key: string]: unknown; }>obj)[key];
            str += `${key}: ${convertToString(value, options)},${generateSpace(<number>options!.spacesAfterComma)}`;
        });
        return `${str.slice(0, (options.spacesAfterComma + 1) * -1)} }`;
    } else if (typeof obj === 'function') {
        const isAsync = obj.toString().slice(0, 5) === 'async';
        const isArrowFunction = obj.toString().slice(isAsync ? 6 : 0, isAsync ? 14 : 8) !== 'function';
        if (isArrowFunction) {
            return obj.toString();
        } else {
            return `${isAsync ? 'async ' : ''}function ${obj.toString().slice(obj.toString().indexOf('('))}`;
        }
    } else {
        return (<symbol>obj).toString();
    }
};

if (typeof window === 'undefined') {
    module.exports = convertToString;
}
