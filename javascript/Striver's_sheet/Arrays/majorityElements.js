// https://leetcode.com/problems/majority-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let candidate = -1;
    for (let i = 0; i < nums.length; i++) {
        if(count === 0){
            candidate = nums[i];
            count = 1;
        }else{
            if(candidate === nums[i]) count++;
            else count--;
        }
    }
    //confirm candidate
    // count = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     if(candidate === nums[i]) count++;
    // }
    // if(count > (nums.length/2)) 
    return candidate;
};

console.log(majorityElement([2,1,2,1,2,1,2]));