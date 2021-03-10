module.exports = function*(arr) {
  let len = arr.length
  let swapped = true
  while (swapped) {
    swapped = false
    for (let i = 1; i < len; i++) {
      if (arr[i - 1] > arr[i]) {
        yield arr.swap(i - 1, i)
        swapped = true
      }
    }
    len--
  }
}
