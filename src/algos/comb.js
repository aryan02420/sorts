module.exports = function*(arr) {
  arr = arr.slice();
  let len = arr.length;
  let sorted = false;
  let shrink = 1.3;
  let gap = len;
  while (!sorted) {
    gap = Math.floor(gap/shrink);
    if (gap <= 1) {
      sorted = true;
      gap = 1;
    }
    for (i = 0; i < len-gap; i++) {
      let j = i + gap;
      yield {
        array: arr.slice(),
        i: i,
        j: j,
        k: [gap, len-gap]
      }
      if (arr[i] > arr[j]) {
        arr.swap(i, j);
        yield {
          array: arr.slice(),
          i: i,
          j: j,
          k: [gap, len-gap]
        }
        sorted = false;
      }
    }
  }
}
