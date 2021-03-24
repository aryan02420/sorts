module.exports = function*(arr) {
  arr = arr.slice();
  let len = arr.length;
  let startindex = 0;
  let endindex = len - 1;
  let i;
  while (startindex < endindex) {
    newstartindex = endindex;
    newendindex = startindex;
    for (i = startindex; i <= endindex; i++) {
      yield {
        array: arr.slice(),
        i: i,
        j: i+1,
        k: [startindex, endindex]
      }
      if (arr[i] > arr[i+1]) {
        arr.swap(i, i+1);
        newendindex = i;
        yield {
          array: arr.slice(),
          i: i,
          j: i+1,
          k: [startindex, endindex]
        }
      }
    }
    endindex = newendindex - 1;
    for (i = endindex; i >= startindex; i--) {
      yield {
        array: arr.slice(),
        i: i,
        j: i+1,
        k: [startindex, endindex]
      }
      if (arr[i] > arr[i+1]) {
        arr.swap(i, i+1);
        newstartindex = i;
        yield {
          array: arr.slice(),
          i: i,
          j: i+1,
          k: [startindex, endindex]
        }
      }
    }
    startindex = newstartindex + 1
  }
}
