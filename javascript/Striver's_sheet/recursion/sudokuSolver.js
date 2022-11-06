// https://leetcode.com/problems/sudoku-solver/

const getPossibleValues = (board, row, col) => {
  let values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < 9; i++) {
    if (board[row][i] != ".") values = values.filter((e) => e != board[row][i]);
  }

  for (let i = 0; i < 9; i++) {
    if (board[i][col] != ".") values = values.filter((e) => e != board[i][col]);
  }

  let m = Math.floor(row / 3) * 3;
  let n = Math.floor(col / 3) * 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[m + i][n + j] != ".")
        values = values.filter((e) => e != board[m + i][n + j]);
    }
  }
  return values;
};
var solveSudoku = function (board, row = 0, col = 0) {
  if (row === 9) return true;
  if (board[row][col] === ".") {
    let possibleValues = getPossibleValues(board, row, col);
    console.log(row,col,possibleValues);
    for (let index = 0; index < possibleValues.length; index++) {
      board[row][col] = "" + possibleValues[index];
      if(solveSudoku(board, row, col)) return true;
    }
  } else {
    col = col + 1;
    if (col > 8) {
      row += 1;
      col = 0;
    }
    if(solveSudoku(board, row, col)) return true;
  }
};

sudoku = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", "3", ".", "8"],
  ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
  ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
  ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
  ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
  ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
  ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
  ["3", "4", "5", "2", "8", "6", "1", "7", "9"],
];
solveSudoku(sudoku);
console.log(sudoku);
