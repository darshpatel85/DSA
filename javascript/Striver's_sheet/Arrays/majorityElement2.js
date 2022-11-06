// https://leetcode.com/problems/majority-element-ii/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let count1 = 0;
  let num1 = -Infinity;
  let count2 = 0;
  let num2 = -Infinity;
  for (let index = 0; index < nums.length; index++) {
    if (num1 === nums[index]) count1++;
    else if (num2 === nums[index]) count2++;
    else if (count1 === 0) {
      num1 = nums[index];
      count1++;
    } else if (count2 === 0) {
      num2 = nums[index];
      count2++;
    } else {
      count1--;
      count2--;
    }
  }
  count1 = 0;
  count2 = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === num1) count1++;
    if (nums[index] === num2) count2++;
  }
  let ans = [];
  if (count1 > nums.length / 3) ans.push(num1);
  if (count2 > nums.length / 3) ans.push(num2);

  return ans;
};

console.log(majorityElement([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3]));
console.log(majorityElement([-1,-1,-1]));

