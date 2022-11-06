// https://leetcode.com/problems/search-a-2d-matrix/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

const binarySearch = (arr, ele, left, right) => {
  if (left > right) return null;
  let mid = Math.floor((right + left) / 2);
  if(arr[mid] === ele) return mid
  if (arr[mid] < ele && (mid >= arr.length - 1 || arr[mid + 1] > ele ))
    return mid;
  else if (arr[mid] < ele) return binarySearch(arr, ele, mid + 1, right);
  else return binarySearch(arr, ele, left, mid - 1);
};

var searchMatrix = function (matrix, target) {
  let row = binarySearch(
    matrix.map((i) => i[0]),
    target,
    0,
    matrix.length - 1
  );
  if(row === null) return false;
  console.log(row);
  if (matrix[row][0] === target) return true;
  let col = binarySearch(matrix[row], target, 0, matrix[row].length - 1);
  if (matrix[row][col] === target) return true;
  return false;
};

console.log(
  searchMatrix(
    [
      [-9, -8, -8, -8],
      [-7, -6, -5, -5],
      [-3, -1, 0, 0],
      [2, 3, 4, 5],
      [7, 7, 7, 7],
      [9, 9, 10, 10],
    ],
    6
  )
);
// console.log(
//   searchMatrix(
//     [
//       [1, 3, 5, 7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 60],
//     ],
//     20
//   )
// );
// console.log(
//   searchMatrix(
//     [
//       [1, 3, 5, 7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 60],
//     ],
//     34
//   )
// );

// console.log(
//   searchMatrix(
//     [
//       [1]
//     ],
//     2
//   )
// );
