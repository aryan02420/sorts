module.exports = function*(arr) {
  arr = arr.slice()
  let len = arr.length
  let swapped = true
  let i;
  while (swapped) {
    swapped = false
    for (i = 1; i < len; i++) {
      if (arr[i - 1] > arr[i]) {
        arr.swap(i - 1, i)
        swapped = true
      }
      yield {
        array: arr.slice(),
        i: i,
        j: i-1
      }
    }
    len--
  }
}
