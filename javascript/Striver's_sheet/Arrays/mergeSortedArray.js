// https://leetcode.com/problems/merge-sorted-array/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function (nums1, m, nums2, n) {
//     let i = 0;
//     let j = 0;
//     while (i < m + j && j < n) {
//         if (nums1[i] > nums2[j]) {
//         nums1.splice(i, 0, nums2[j]);
//         nums1.pop();
//         j++;
//         }
//         i++;
//     }
//     if (j < n) nums1.splice(i, n-j, ...nums2.slice(j, n));
// };
var merge = function (nums1, m, nums2, n) {
  let index = m + n - 1;
  m--;
  n--;
  while (n >= 0) {
    if (nums2[n] < nums1[m]) {
      nums1[index] = nums1[m];
      m--;
    } else {
      nums1[index] = nums2[n];
      n--;
    }
    index--;
  }
};

a1 = [1, 2, 3, 0, 0, 0];
a2 = [2, 5, 6];
merge(a1, 3, a2, 3);
console.log(a1);
a1 = [1, 3, 5, 7];
a2 = [2, 4, 6, 0, 0, 0];
merge(a2, 3, a1, 4);
console.log(a2);
a1 = [];
a2 = [2, 4, 6];
merge(a2, 3, a1, 0);
console.log(a2);
a1 = [1, 3, 5];
a2 = [];
merge(a1, 3, a2, 0);
console.log(a1);
a1 = [1, 2, 15, 17,0,0];
a2 = [4, 6];
merge(a1, 4, a2, 2);
console.log(a1);
