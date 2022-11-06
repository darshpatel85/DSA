var Search = function (arr, num) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = (low + high) / 2;
    if (arr[mid] <= num) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low;
};

var findMedian = function (A) {
  let maxLimit = -1;
  for (let i = 0; i < A.length; i++) {
    if (A[i][A[i].length - 1] > maxLimit) maxLimit = A[i][A[i].length - 1];
  }
  let minLimit = 1e9;
  for (let i = 0; i < A.length; i++) {
    if (A[i][0] < minLimit) minLimit = A[i][0];
  }

  while (minLimit <= maxLimit) {
    let mid = Math.floor((maxLimit + minLimit) / 2);
    leftCount = 0;
    for (let j = 0; j < A.length; j++) {
     leftCount += Search(A[j], mid);
    }

    if ((A.length * A[0].length) / 2 >= leftCount) {
      minLimit = mid + 1;
    } else {
      maxLimit = mid - 1;
    }
    console.log(minLimit, maxLimit);
  }
  return minLimit;
};

// console.log(Search(0, 2, [2, 6, 9], 1));
// console.log(Search(0, 2, [2, 6, 9], 2));
// console.log(Search(0, 2, [1, 1, 1], 1));
// console.log(Search(0, 2, [1, 1, 1], 0));
// console.log(Search(0, 2, [2, 6, 9], 9));
// console.log(Search(0, 2, [2, 6, 9], 10));

// console.log(
//   findMedian([
//     [1, 3, 6],
//     [2, 6, 9],
//     [3, 6, 9],
//   ])
// );
console.log(
  findMedian([
    [1, 1, 2, 9, 10, 12, 12, 17, 21, 22, 30],
    [2, 3, 5, 7, 8, 12, 21, 25, 26, 27, 30],
    [1, 3, 12, 13, 13, 14, 17, 18, 21, 21, 23],
  ])
);
// console.log(
//   findMedian([
//     [1, 9, 9],
//     [9, 9, 9],
//     [3, 6, 9],
//   ])
// );
