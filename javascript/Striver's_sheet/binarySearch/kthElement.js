var findMedianSortedArrays = function (A, B, n, m, k) {
  let point = 0;
  let ele = 0;
  let i = 0;
  let j = 0;
  while (point < k) {
    if (i < n && j < m) {
      if (A[i] < B[j]) {
        ele = A[i];
        i++;
      } else {
        ele = B[j];
        j++;
      }
    } else if (i < n) {
      ele = A[i];
      i++;
    } else if (j < m) {
      ele = B[j];
      j++;
    }
    if (point === k-1) return ele;
    point++;
  }
};

console.log(
  findMedianSortedArrays(
    [100, 112, 256, 349, 770],
    [72, 86, 113, 119, 265, 445, 892],
    5,
    7,
    7
  )
);
