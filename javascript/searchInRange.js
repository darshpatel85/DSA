// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
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

var binaryLeftSearch = function (arr, start, end, target) {
  let mid = Math.floor((end + start) / 2);
  if (start > end) return -1;
  if (arr[start] === target) return start;
  if (arr[mid] === target) {
    return binaryLeftSearch(arr, start, mid-1 , target);
  } else {
    return binaryLeftSearch(arr, mid + 1, end+1, target);
  }
};

var binaryRightSearch = function (arr, start, end, target) {
  let mid = Math.floor((end + start) / 2);
  if (start > end) return start-1;
  if (arr[end] === target) return end;
  if (arr[mid] === target) {
    return binaryRightSearch(arr, mid + 1, end, target);
  } else {
    return binaryRightSearch(arr, start-1, mid-1 , target);
  }
};

var searchRange = function (nums, target) {
  let ele = binarySearch(nums, 0, nums.length - 1, target);
  if (ele === -1) return [-1, -1];
  let leftInd = binaryLeftSearch(nums, 0, ele, target);
  let rightInd = binaryRightSearch(nums, ele, nums.length - 1, target);
  return [leftInd, rightInd];
};

console.log(searchRange([5, 7, 7, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 10], 7));
console.log(searchRange([7, 7, 7, 7, 7], 7));
console.log(searchRange([5, 7, 8, 8, 10], 7));
console.log(searchRange([5, 0, 8, 8, 10], 7));
console.log(searchRange([5, 7, 7, 8, 10], 7));

