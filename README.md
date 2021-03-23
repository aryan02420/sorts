# Sorts
[![tests][tests-shield]][tests-url]
[![npm][npm-shield]][npm-url]

different sorting algorithms implemented using generator functions

 - Bubble
 - Selection
 - Insertion
 - Quick
 - Cocktail
 - Comb

### Installation

```js
npm i @aryan02420/sorts
```

### Usage

```js
const {Bubble} = require('@aryan02420/sorts')
let array = [2,5,3,7,1]
let bSort = Bubble(array)

console.log(bsort.next().value.array)   // [ 2, 3, 5, 7, 1 ]
console.log(bsort.next().value.array)   // [ 2, 3, 5, 1, 7 ]
```

```js
const sortingAlgos = require('@aryan02420/sorts')
let sSort = sortingAlgos.Selection(array)
sSort.next()
```

```js
const {Insertion: isort} = require('@aryan02420/sorts')
let iSort = isort(array)
iSort.next()
```

```js
// browser
qsort = sorts.Quick(array)
qsort.next()
```

[tests-shield]: https://img.shields.io/github/workflow/status/aryan02420/Sorts/tests?label=tests
[tests-url]: https://github.com/aryan02420/sorts/actions/workflows/test-runner.yml
[npm-shield]: https://img.shields.io/npm/v/@aryan02420/sorts
[npm-url]: https://www.npmjs.com/package/@aryan02420/sorts
