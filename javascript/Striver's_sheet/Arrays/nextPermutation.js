// https://leetcode.com/problems/next-permutation/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  for (let i = nums.length - 1; i > 0; i--) {
    //if the prev element is greater than current it means next permutation possible
    if (nums[i] > nums[i - 1]) {
    //sort the array after ith pos so we can get smallest element which is bigger than nums[i-1] to replace
      let sorted = nums.slice(i).sort((a,b) => a-b);
      console.log(sorted);
      for (let j = 0; j < sorted.length; j++) {
            if(sorted[j] > nums[i-1]){
                console.log(j,i-1);
                let x = sorted[j];
                sorted.splice(j,1);
                //from remaining elements and nums[i-1] we require to attach in sorted manner
                nums.splice(
                  i - 1,
                  nums.length - i + 1,
                  x,
                  ...[nums[i-1],...sorted].sort((a,b) => a-b)
                );
                return;
            }
      }
      
      return;
    }
  }
//if next permutation not possible we can directly send sorted array
  nums.sort((a,b) => a-b);
  return;
};

let nums = [12, 9, 20, 19];
nextPermutation(nums);
console.log(nums);

//  nums = [1, 2, 3, 4];
// nextPermutation(nums);
// console.log(nums);
// nums = [4,3,2,1];
// nextPermutation(nums);
// console.log(nums);
// nums = [5,4,1,2,3];
// nextPermutation(nums);
// console.log(nums);
// nums = [1,5,2,3,4];
// nextPermutation(nums);
// console.log(nums);
// nums = [3,4,1,2,5];
// nextPermutation(nums);
// console.log(nums);
// nums = [3,3,4,6,5];
// nextPermutation(nums);
// console.log(nums);
// nums = [3,3,3,3];
// nextPermutation(nums);
// console.log(nums);
// nums = [3,2,1];
// nextPermutation(nums);
// console.log(nums);
