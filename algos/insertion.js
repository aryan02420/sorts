module.exports = function*(arr) {
  let i = 1
  let len = arr.length
  while (i < len) {
    let j = i
    while (j >= 0 && arr[j - 1] > arr[j]) {
      yield arr.swap(j, j - 1)
      j--
    }
    i++
  }
}
