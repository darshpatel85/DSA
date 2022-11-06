// https://leetcode.com/problems/search-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var binarySearch = function (arr, start, end, target) {
//   let mid = Math.floor((end + start) / 2);
//   if (start > end) return -1;
//   if (target === arr[mid]) return mid;
//   if (target === arr[start]) return start;
//   if (target === arr[end]) return end;
//   if (arr[mid] > target) {
//     if (target > arr[end] && target > arr[start])
//       return binarySearch(arr, start, mid - 1, target);
//     else return binarySearch(arr, mid + 1, end, target);
//   } else {
//     if (target < arr[start] && target < arr[end])
//       return binarySearch(arr, start, mid - 1, target);
//     else return binarySearch(arr, mid + 1, end, target);
//   }
// };
var binarySearch = function (arr, start, end, target) {
  let mid = Math.floor((end + start) / 2);
  if (start > end) return -1;
  if (target === arr[mid]) return mid;
  if (target === arr[start]) return start;
  if (target === arr[end]) return end;
  if (arr[mid] > target) {
    return binarySearch(arr, start, mid - 1, target);
  } else {
    return binarySearch(arr, mid + 1, end, target);
  }
};

var findPivot = function (arr, start, end) {
  let mid = Math.floor((start + end) / 2);
  if (start < end) {
    if (
      mid > 0 &&
      arr[mid] > arr[mid - 1] &&
      mid < arr.length - 1 &&
      arr[mid] < arr[mid + 1]
    ) {
      return findPivot(arr, start, mid - 1) + findPivot(arr, mid + 1, end);
    } else if (mid > 0 && arr[mid] < arr[mid - 1]) {
      return mid;
    } else if (mid < arr.length - 1 && arr[mid] > arr[mid + 1]) return mid + 1;
    else return 0;
  } else return 0;
};
var search = function (nums, target) {
  let pivot = findPivot(nums, 0, nums.length - 1);
  return  binarySearch(nums, 0, pivot, target) !== -1 ? binarySearch(nums, 0, pivot, target) :
      binarySearch(nums, pivot, nums.length-1, target);
};

console.log(search([0, 1, 2, 4, 5, 6], 4));
console.log(search([0, 1, 2, 4, 5, 6], 5));
console.log(search([0, 1, 2, 4, 5, 6], 6));
console.log(search([0, 1, 2, 4, 5, 6], 0));
console.log(search([0, 1, 2, 4, 5, 6], 1));
console.log(search([0, 1, 2, 4, 5, 6], 2));
console.log(search([8, 1, 2, 4, 5, 6], 4));
console.log(search([8, 1, 2, 4, 5, 6], 5));
console.log(search([8, 1, 2, 4, 5, 6], 6));

console.log(search([8, 1, 2, 4, 5, 6], 0));
console.log(search([8, 1, 2, 4, 5, 6], 1));

console.log(search([8, 1, 2, 4, 5, 6], 2));
console.log(search([ 1, 2, 4, 5, 6,0], 4));

console.log(search([1, 2, 4, 5, 6, 0], 5));
console.log(search([1, 2, 4, 5, 6, 0], 6));

console.log(search([ 1, 2, 4, 5, 6,0], 0));
console.log(search([ 1, 2, 4, 5, 6,0], 1));
console.log(search([1, 2, 4, 5, 6, 0], 2));
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
