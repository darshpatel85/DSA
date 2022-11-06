/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let grid = new Array(m);
    for (let i = 0; i < m; i++) {
        grid[i] =  new Array(n);       
    }
    for (let i = 0; i < n; i++) {
        grid[m-1][i] = 1;        
    }
    for (let i = 0; i < m; i++) {
      grid[i][n-1] = 1;
    }
    for (let i = m-2; i >= 0; i--) {
        for (let j = n-2; j >= 0; j--) {
            grid[i][j] = grid[i+1][j] + grid[i][j+1];
        }
    }
    return grid[0][0];
};

console.log(uniquePaths(3, 7));
console.log(uniquePaths(3, 3));
console.log(uniquePaths(2, 5));

