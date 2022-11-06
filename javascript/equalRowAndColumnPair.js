// https://leetcode.com/contest/weekly-contest-303/problems/equal-row-and-column-pairs/

var equalPairs = function (grid) {
  let ans = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][0] === grid[0][j]) {
        let isEqual = 1;
        for (let k = 0; k < grid.length; k++) {
          if (grid[i][k] !== grid[k][j]) {
            isEqual = 0;
            break;
          }
        }
        if (isEqual === 1) {
          ans++;
        }
      }
    }
  }
  return ans;
};

// console.log(
//   equalPairs([
//     [2, 2, 2, 2],
//     [2, 2, 2, 2],
//     [2, 2, 2, 2],
//     [2, 2, 2, 2],
//   ])
// );
console.log(equalPairs(Array(200).fill(Array(200).fill(0))));
