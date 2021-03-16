module.exports = function*(arr) {
  arr = arr.slice()
  let i = 1
  let j;
  let len = arr.length
  while (i < len) {
    j = i
    while (j >= 0 && arr[j - 1] > arr[j]) {
      arr.swap(j, j - 1)
      yield {
        array: arr.slice(),
        i: i,
        j: j-1
      }
      j--
    }
    i++
  }
}
