module.exports = function*(arr) {
  arr = arr.slice()
  let i, j
  let len = arr.length
  for (i = 0; i < len; i++) {
    let jmin = i
    for (j = i + 1; j < len; j++) {
      if (arr[j] < arr[jmin]) jmin = j
      yield {
        array: arr.slice(),
        i: i,
        j: j
      }
    }
    if (jmin !== i) {
      arr.swap(i, jmin)
      yield {
        array: arr.slice(),
        i: i,
        j: jmin
      }
    }
  }
}
