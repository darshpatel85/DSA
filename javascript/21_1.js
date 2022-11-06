/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) return true;
//     }
//   }
//   return false;
// };


//optimized

var containsDuplicate = function (nums) {
    let temp = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < temp.length; j++) {
      if (nums[i] === nums[j]) return true;
    }
    temp.push(nums[i]);
  }
  return false;
};
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 2, 3, 4, 1]));
console.log(containsDuplicate([1, 2, 3, 4, 4]));
