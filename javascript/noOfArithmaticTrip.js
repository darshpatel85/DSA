// https://leetcode.com/contest/weekly-contest-305/problems/number-of-arithmetic-triplets/

/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
  let x = {};
  let count = 0;
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < nums.length; i++) {
      let k = nums[i] + diff * j;
      if (x[k] === undefined) {
        x[k] = 1;
      } else {
        x[k] = x[k] + 1;
        if (x[k] === 3) count += 1;
      }
    }
  }
  return count;
};

console.log(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3));
console.log(arithmeticTriplets([4, 5, 6, 7, 8, 9], 2));

