// https://leetcode.com/problems/merge-intervals/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let i = 0;
  while (i < intervals.length) {
    let deleted = false;
    let j = i + 1;
    while (j < intervals.length) {
      if (
        intervals[i][0] <= intervals[j][0] &&
        intervals[i][1] >= intervals[j][0]
      ) {
        intervals[i] = [
          intervals[i][0],
          Math.max(intervals[i][1], intervals[j][1]),
        ];
        intervals.splice(j,1);
        deleted = true;
      } else if (
        intervals[j][0] < intervals[i][0] &&
        intervals[j][1] > intervals[i][0]
      ) {
        intervals[j] = [
          intervals[j][0],
          Math.max(intervals[j][1], intervals[i][1]),
        ];
        intervals.splice(i, 1);
        deleted = true;
      }else{
        j++;
      }
    } if(!deleted) i++;
  }
  return intervals;
};

console.log(merge([
  [2, 3],
  [4, 6],
  [5, 7],
  [3, 4],
]));
console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
console.log(
  merge([
    [1, 3],
    [2, 6],
  
  ])
);
console.log(
  merge([
    [1, 6],
    [2, 3],
    [4, 5],
    [15, 18],
  ])
);
console.log(
  merge([
    [15, 18],
    [2, 3],
    [4, 5],
    [1, 6],
  ])
);
console.log(
  merge([
    [1,1],
    [1,1],
    [2,2],
    [2,2]
  ])
);