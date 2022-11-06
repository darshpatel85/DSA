// https://leetcode.com/problems/search-in-rotated-sorted-array/

var binarySearch = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (target === nums[mid]) return mid;
    if (nums[low] <= nums[mid]) {
      if (target >= nums[low] && target <= nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (target >= nums[mid] && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
};

console.log(binarySearch([6, 0, 1, 2, 3], 3));
console.log(binarySearch([6, 0, 1, 2, 3], 2));
console.log(binarySearch([6, 0, 1, 2, 3], 1));
console.log(binarySearch([6, 0, 1, 2, 3], 0));
console.log(binarySearch([6, 0, 1, 2, 3], 5));
console.log(binarySearch([6, 0, 1, 2, 3], 4));
console.log(binarySearch([0, 1, 2, 3, 4, 5, 6], 6));
