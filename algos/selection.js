module.exports = function*(arr) {
  let i, j
  let len = arr.length
  for (i = 0; i < len; i++) {
    let jmin = i
    for (j = i + 1; j < len; j++) {
      if (arr[j] < arr[jmin]) jmin = j
      yield arr
    }
    if (jmin !== i) {
      yield arr.swap(i, jmin)
    }
  }
}
