var findMedianSortedArrays = function (nums1, nums2) {
  let median = 0;
  let totalLength = nums1.length + nums2.length;
  let point = 0;
  let prevMed = 0;
  let i = 0;
  let j = 0;
  while (point <= totalLength / 2) {
    if (i < nums1.length && j < nums2.length) {
      if (nums1[i] < nums2[j]) {
        prevMed = median;
        median = nums1[i];
        i++;
      } else {
        prevMed = median;
        median = nums2[j];
        j++;
      }
    } else if (i < nums1.length) {
      prevMed = median;
      median = nums1[i];
      i++;
    } else if (j < nums2.length) {
      prevMed = median;
      median = nums2[j];
      j++;
    }
    point++;
  }
  return totalLength % 2 === 0 ? (median + prevMed) / 2 : median;
};

console.log(findMedianSortedArrays([1,1,1,1], [1,1,4]));
