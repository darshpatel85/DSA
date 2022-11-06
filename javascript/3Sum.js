// https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let ans = [];
  for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        ans.push([nums[i], nums[left], nums[right]]);
        left++;
    while (left <right  && nums[left] === nums[left - 1]) left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return ans;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4, 5, -5]));
console.log(threeSum([-1, 0, 1, 2, -1, -4, 5, 5,-1]));
console.log(threeSum([0]));
