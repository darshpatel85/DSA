/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNonDuplicate = function (nums) {
//   let low = 0;
//   let high = nums.length - 1;
//   while (low <= high) {
//     let mid = (low + high) / 2;
//     let isEven = (mid-low) % 2 === 0;
//     if (isEven) {
//       if (mid > 1 && nums[mid] === nums[mid - 1]) {
//         high = mid - 2;
//       } else if (mid < nums.length - 2 && nums[mid] === nums[mid + 1]) {
//         low = mid + 2;
//       } else {
//         return nums[mid];
//       }
//     } else {
//       if (mid > 0 && nums[mid] === nums[mid - 1]) {
//         low = mid + 1;
//       } else if (mid < nums.length - 1 && nums[mid] === nums[mid + 1]) {
//         high = mid - 1;
//       } else {
//         return nums[mid];
//       }
//     }
//   }
// };

var singleNonDuplicate = function (nums) {
  let low = 0;
  let high = nums.length - 2;
  while (low <= high) {
    let mid = Math.floor((low + high) >> 1);
    //XOR with 1 of any even number will give you next odd number and 
    // XOR with 1 of any odd number will give you next even number
    if (nums[mid] === nums[mid ^ 1]) low = mid + 1;
    else high = mid - 1;
  }
  return nums[low];
};
console.log(singleNonDuplicate([3, 4, 4, 5, 5]));
