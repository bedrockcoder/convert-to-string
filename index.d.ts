export interface Options {
    /** 
     * The default character to use for strings, e.g. `'Hello World'` uses `'single-quotes'`,
     * `"Hello World"` uses `"double-quotes"`, and `` `Hello World` `` uses `` `backticks` ``
     * @default 'single-quotes'
     */
    defaultString?: 'single-quotes' | 'double-quotes' | 'backticks';
    /**
     * How many spaces to use after a comma in arrays and objects, e.g. `1` space would be `['Hello', 'World']`,
     * `0` spaces would be `['Hello','World']`, `3` spaces would be `['Hello',   'World']`, etc.
     * @default 1
     */
    spacesAfterComma?: number;
}

/**
 * Converts a value of any data type to a string
 * @param obj The object to convert to a string
 * @param options The options to use when converting the object to a string
 * @returns The converted string
 */
declare const convertToString: (obj?: unknown, options?: Options) => string;

export = convertToString;
