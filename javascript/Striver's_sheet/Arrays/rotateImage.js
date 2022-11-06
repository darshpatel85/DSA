// https:leetcode.com/problems/rotate-image/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
    let swap = (matrix, j, lower, upper) => {
    let t = matrix[lower][lower+j];
    matrix[lower][lower+j] = matrix[upper - j][lower];
    matrix[upper - j][lower] = matrix[upper][upper - j];
    matrix[upper][upper - j] = matrix[lower+j][upper];
    matrix[lower+j][upper] = t;

    };

    var rotate = function (matrix) {
    for (let i = 0; i < Math.floor(matrix.length / 2); i++) {
        let ind = 0;
        for (let j = i; j < matrix.length - i - 1; j++) {
        swap(matrix, ind, i, matrix.length - i - 1);
        ind++;
        }
    }
    };



let x = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
rotate(x);
console.log(x);
x = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
rotate(x);
console.log(x);

x = [
  [5, 1, 9, 11, 6],
  [2, 4, 8, 10, 6],
  [13, 3, 6, 7, 6],
  [15, 14, 12, 16, 6],
  [16, 16, 16, 16, 6]
];
rotate(x);
console.log(x);
x = 
  [
    [2, 29, 20, 26, 16, 28],
    [12, 27, 9, 25, 13, 21],
    [32, 33, 32, 2, 28, 14],
    [13, 14, 32, 27, 22, 26],
    [33, 1, 20, 7, 21, 7],
    [4, 24, 1, 6, 32, 34],
  ];

  rotate(x)
  console.log(x);