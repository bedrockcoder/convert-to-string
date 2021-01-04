# `convert-to-string` v1.0.2
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
### Usage
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

console.log(convertToString(myObj));
// "{ name: ['John', 'Doe'], age: 17, incrementAge: more => this.age += more, decrementAge: decrementAge(less) {\n    this.age -= less;\n    }, food: { name: 'pizza', taste: 'nice' } }"
```
