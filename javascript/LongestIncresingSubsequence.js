/**
 * @param {number[]} nums
 * @return {number}
 */

//leetcode.com/problems/longest-increasing-subsequence//

var lengthOfLIS = function (nums) {
  let sorted = [...nums];
  sorted.sort((a, b) => a - b);
  console.log(sorted);
  let sequenceArr = [];
  let MAX = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    let isInserted = false;
    for (let j = 0; j < sequenceArr.length; j++) {
      if (nums[i] < sequenceArr[j][0]) {
        if (sorted.find((x) => x > nums[i] && x < sequenceArr[j][0])) {
          sequenceArr = sequenceArr.find(
            (i) =>
              JSON.stringify(i) === JSON.stringify([nums[i], ...sequenceArr[j]])
          )
            ? sequenceArr
            : [...sequenceArr, [nums[i], ...sequenceArr[j]]];
        if (MAX < sequenceArr[j].length+1) MAX = sequenceArr[j].length+1;

        }else{
          sequenceArr[j] = [nums[i], ...sequenceArr[j]];
        if (MAX < sequenceArr[j].length) MAX = sequenceArr[j].length;

        }
        isInserted = true;
      }
    }
    if (!isInserted) {
      sequenceArr = sequenceArr.find(
        (m) => JSON.stringify(m) === JSON.stringify([nums[i]])
      )
        ? sequenceArr
        : [...sequenceArr, [nums[i]]];
    }
  }
  return [sequenceArr,MAX];
};

// console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));
// console.log(lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]));

// console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
// console.log(lengthOfLIS([7]));
// console.log(lengthOfLIS([10, 22, 9, 33, 21, 50, 41, 60, 80]));
console.log(lengthOfLIS([11, 12, 13, 0, 5, -1, 6, 7, 8]));

;

// console.log(lengthOfLIS(Array.from({ length: 2500 }, (e, ind) => 2 * ind + 1)));
// console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));
// console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));
