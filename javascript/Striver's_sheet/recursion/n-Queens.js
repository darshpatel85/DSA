// https://leetcode.com/problems/n-queens/

const isSafe = (row, col, board, n) => {
  
    let currRow = row;
    let currCol = col;
  while(col >= 0) {
    if (board[row][col] === "Q") return false;
    col--;
  }
  row = currRow;
  col = currCol;
  while (col>=0 && row>=0) {
    if(board[row][col] === "Q") return false;
    col--;
    row--;
  }
  row = currRow;
  col = currCol;
  while (col >= 0 && row < n) {
    if (board[row][col] === "Q") return false;
    col--;
    row++;
  }
  return true;
};

const solve = (board, col, ans, n) => {
  if (col === n) {
    ans.push([...board.map(i => i.join(""))]);
  }
  else {
    for (let row = 0; row < n; row++) {
      if (isSafe(row, col, board, n)) {
        board[row][col] = "Q";
        solve(board,col+1,ans,n);
        board[row][col] = "."
      }
    }
  }
  return;
};

var solveNQueens = function (n) {
  let ans = [];
  let board = []
  for (let i = 0; i < n; i++) {
    let t = []
    for (let j = 0; j < n; j++) {
      t.push(".");
    }
    board.push(t)
  }
  solve(board, 0, ans, n);
  return ans;
};

console.log(solveNQueens(1));
