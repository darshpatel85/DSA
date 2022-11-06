// https://leetcode.com/problems/set-matrix-zeroes/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let rows = [];
  let cols = [];
  for (let i = 0; i < matrix.length; i++) {
    let hasZero = false;

    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        hasZero = true;
        cols = [...new Set([...cols, j])];
      }
    }
    rows = hasZero ? [...new Set([...rows, i])] : rows;
  }

  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[rows[i]][j] = 0;
    }
  }

  for (let i = 0; i < cols.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      matrix[j][cols[i]] = 0;
    }
  }
};

let mat = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
setZeroes(mat);
console.log(mat);
