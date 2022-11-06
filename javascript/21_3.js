/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let mergeArray = [];
  let num1i = 0;
  let num2i = 0;
  for (let i = 0; i < nums1.length + nums2.length; i++) {
    if (nums1[num1i] !== undefined && nums2[num2i] !== undefined) {
      if (nums1[num1i] < nums2[num2i]) {
        mergeArray.push(nums1[num1i]);
        num1i++;
      } else {
        mergeArray.push(nums2[num2i]);
        num2i++;
      }
    } else if (nums1[num1i] !== undefined) {
      mergeArray.push(nums1[num1i]);
      num1i++;
    } else if (nums2[num2i] !== undefined) {
      mergeArray.push(nums2[num2i]);
      num2i++;
    }
  }
  return (num1i + num2i) % 2 === 1
    ? mergeArray[(num1i + num2i -1) / 2]
    : (mergeArray[((num1i + num2i) / 2)-1] + mergeArray[(num1i + num2i) / 2]) / 2;
};

console.log(findMedianSortedArrays([0,0], [0,0]));
