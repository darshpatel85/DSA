// https://leetcode.com/problems/4sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let ans = [];
  nums = nums.sort((a, b) => a - b);
  for (let index = 0; index < nums.length; index++) {
    if (index > 0 && nums[index] === nums[index - 1]) continue;
    for (let index1 = index + 1; index1 < nums.length; index1++) {
      if (index1 > index + 1 && nums[index1] === nums[index1 - 1]) continue;
      let left = index1 + 1;
      let right = nums.length - 1;
      while (left < right) {
        let sum = nums[index] + nums[index1] + nums[left] + nums[right];
        if (sum === target) {
          ans.push([nums[index], nums[index1], nums[left], nums[right]]);
          left++;
          while (left < right && nums[left] === nums[left - 1]) {
            left++;
          }
        } else if (sum < target) left++;
        else right--;
      }
    }
  }
  return ans;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([0,0,8,0], 8));
