const quicksort = function*(arr, lo, hi) {
  lo = lo ?? 0;
  hi = hi ?? arr.length;
  if (lo < hi) {
      let p;

          let pivot = arr[hi];
          let i = lo;
          for (let j = lo; j < hi; j++) {
            if (arr[j] < pivot) {
              yield {array: arr.slice(), i: i, j: j, k: hi};
              arr.swap(i, j);
              yield {array: arr.slice(), i: i, j: j, k: hi};
              i++;
            }
          }
          yield {array: arr.slice(), i: i, j: hi, k: hi};
          arr.swap(i, hi);
          yield {array: arr.slice(), i: i, j: hi, k: hi};
          p = i;

      yield* quicksort(arr, lo, p-1);
      yield* quicksort(arr, p+1, hi);
      }
  yield {array: arr.slice(), i: lo, j: hi, k: hi};
}

module.exports = function*(arr) {
  arr = arr.slice();
  yield* quicksort(arr, 0, arr.length-1);
};
