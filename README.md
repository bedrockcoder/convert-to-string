# `convert-to-string` v1.1.1

# WARNING: DEPRECATED
This package is deprecated, you should use built in JavaScript functions to convert your data types to strings, see [this gist](https://gist.github.com/jsmon/2cbee6ff427624743d05d71b23118705).

Have you ever gotten stuck with `'[object Object]'`?  
Or wondered why your array looks like `'1,2,3,a,b,c,,d'`?  
Or haven't been able to get property `toString` of `null`?  
If so, this is the package for you.
## Installation
### Node.js
You can install with `npm`:
```sh
$ npm install convert-to-string
```
or `yarn`:
```sh
$ yarn add convert-to-string
```
### Browser
You can use a CDN, such as [JSDelivr](https://jsdelivr.com):
```html
<script src="https://cdn.jsdelivr.net/npm/convert-to-string/dist/index.min.js"></script>
```
(or, you could use [index.js](https://cdn.jsdelivr.net/npm/convert-to-string/dist/index.js), which is not recommended for production)
## Usage
```js
const convertToString = require('convert-to-string');
const myObj = {
    name: ['John', 'Doe'],
    age: 17,
    incrementAge: (more) => this.age += more,
    decrementAge(less) {
        this.age -= less;
    },
    food: { name: 'pizza', taste: 'nice' }
};

console.log(convertToString(myObj, { defaultString: 'double-quotes' }));
// '{ name: ["John", "Doe"], age: 17, incrementAge: more => this.age += more, decrementAge: decrementAge(less) {\n    this.age -= less;\n    }, food: { name: "pizza", taste: "nice" } }'
```
## `convertToString(obj, options)`
### `obj`
`obj` is a parameter that can be of any type, it is the object to convert to a string.
### `options`
`options` is an optional parameter that is an object, It is the options to use when converting the object to a string.
#### `options.defaultString`
`options.defaultString` is the default character to use for strings, e.g. `'Hello World'` uses `'single-quotes'`, `"Hello World"` uses `"double-quotes"`, and `` `Hello World` `` uses `` `backticks` ``. It can be:
* `single-quotes`
* `double-quotes`
* `backticks`

It defaults to `single-quotes`
#### `options.spacesAfterComma`
`options.spacesAfterComma` is a positive integer representing how many spaces to use after a comma in arrays and objects, e.g. `1` space would be `['Hello', 'World']`, `0` spaces would be `['Hello','World']`, `3` spaces would be `['Hello',   'World']`, etc.  
It defaults to `1`
