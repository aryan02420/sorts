# Sorts 
[![Tests][tests-shield]][tests-url]

different sorting algorithms implemented using generator functions

 - Bubble
 - Selection
 - Insertion

### Installation

```js
npm i @aryan02420/sorts
```

### Usage

```js
const {Bubble} = require('./sorts')
let array = [2,5,3,7,1]
let sort = Bubble(array)

console.log(sort.next().value)   // [ 2, 3, 5, 7, 1 ]
console.log(sort.next().value)   // [ 2, 3, 5, 1, 7 ]
```

[tests-shield]: https://github.com/aryan02420/sorts/actions/workflows/test-runner.yml/badge.svg
[tests-url]: https://github.com/aryan02420/sorts/actions/workflows/test-runner.yml
