const merge = function*(arr, lo, mid, hi) {
  var lo2 = mid+1;
  if (arr[mid] <= arr[lo2]) return;

  while (lo <= mid && lo2 <= hi) {
    if (arr[lo] <= arr[lo2]) {
      lo++;
    } else {
      yield {array: arr.slice(), i: lo, j: lo2, k: [lo, mid, mid+1, hi]};
      val = arr[lo2]
      idx = lo2

      while (idx !== lo) {
        arr[idx] = arr[idx-1]
        idx--
      }

      arr[lo] = val
      lo++
      mid++
      lo2++

    }
    yield {array: arr.slice(), i: lo, j: lo2, k: [lo, mid, mid+1, hi]};
  }

}

const mergesort = function*(arr, lo, hi) {
  lo = lo ?? 0;
  hi = hi ?? arr.length;
  var mid = lo + Math.floor((hi - lo)/2);
  yield {array: arr.slice(), i: lo, j: hi, k: [mid, mid+1]};
  if (lo < hi) {
    yield* mergesort(arr, lo, mid);
    yield* mergesort(arr, mid+1, hi);
    yield* merge(arr, lo, mid, hi);
  }
  yield {array: arr.slice(), i: lo, j: hi, k: [mid, mid+1]};
}

module.exports.Merge = function*(arr) {
  arr = arr.slice();
  yield* mergesort(arr, 0, arr.length-1);
}
