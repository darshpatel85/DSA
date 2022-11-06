// https://leetcode.com/problems/sort-colors/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var swap = function (nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};

var sortColors = function (nums) {
  let i = 0;
  let k = nums.length - 1;
  let read = 0;
  while (read <= k && i < nums.length) {
    if (nums[read] === 2) {
      swap(nums, read, k);
      k--;
    } else if (nums[read] === 0) {
      if (nums[read] === nums[i]) read++;
      else swap(nums, read, i);
      i++;
    } else {
      read++;
    }
  }
};

let x = [2, 0, 2, 1, 1, 0];
sortColors(x);
console.log(x);
x = [1, 1, 1, 0, 0, 0];
sortColors(x);
console.log(x);
x = [1, 1, 1, 2, 2, 2];
sortColors(x);
console.log(x);
x = [2, 2, 2, 0, 0, 0];
sortColors(x);
console.log(x);
x = [1, 0, 2, 2, 0, 1];
sortColors(x);
console.log(x);
x = [0, 0, 0, 0, 0, 0];
sortColors(x);
console.log(x);
x = [1, 1, 1, 1, 1, 1];
sortColors(x);
console.log(x);
x = [2, 2, 2, 2, 2, 2];
sortColors(x);
console.log(x);

x = [0, 0, 1, 1, 2, 2];
sortColors(x);
console.log(x);
x = [0, 0, 1, 1, 2, 2, 0, 0, 1, 1, 2, 2];
sortColors(x);
console.log(x);
x = [2, 1, 0, 1, 2];
sortColors(x);
console.log(x);
x = [0, 1, 2, 1, 0];
sortColors(x);
console.log(x);
