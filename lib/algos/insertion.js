module.exports = function*(arr) {
  arr = arr.slice();
  let i, j;
  let len = arr.length;
  for (i = 1; i < len; i++) {

    for (j = i; j >= 0; j--) {

      if (arr[j - 1] > arr[j]) {
        yield {
          array: arr.slice(),
          i: j-1,
          j: j,
          k: i
        }
        arr.swap(j, j - 1);
        yield {
          array: arr.slice(),
          i: j-1,
          j: j,
          k: i
        }
      } else {
        yield {
          array: arr.slice(),
          i: j-1,
          j: j,
          k: i
        }
        break;
      }

    }

  }
}
