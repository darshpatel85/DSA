/**
 * @param {number[]} nums
 * @return {number}
 */
// space complaxity O(n)
// var findDuplicate = function (nums) {
//   let x = new Array(nums.length).fill(0);
//   for (let i = 0; i < nums.length; i++) {
//     if (x[nums[i]] === 1) return nums[i];
//     x[nums[i]]++;
//   }
// };

// space complaxity O(1)
var findDuplicate = function (nums) {
  let slow = 0;
  let fast = 0;
  
};


console.log(findDuplicate([1, 3, 4, 2, 2]));
console.log(findDuplicate([1, 3, 4, 2, 2]));
console.log(findDuplicate([1, 3, 4, 3, 2]));
console.log(findDuplicate([1, 3, 4, 1, 2]));

