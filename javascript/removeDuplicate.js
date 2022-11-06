// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = nums.length;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
      i--;
      k--;
    }
  }
  return k;
};

x = [1, 2, 3, 4, 5,6];
let k =  removeDuplicates(x);
console.log(x,k);
