/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    tmax = -1e5
    tempMax = -1e5
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] > (tempMax+nums[i]))
            tempMax = nums[i]
        else tempMax += nums[i]
        if(tempMax > tmax)
            tmax = tempMax;        
    }
    return tmax;
};



console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([-1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
console.log(maxSubArray([5, 4, 1, 7, 8]));
console.log(maxSubArray([1, 4, -5, 7, -8]));
console.log(maxSubArray([-2,1]));
console.log(maxSubArray([1, 2, -1, -2, 2, 1, -2, 1]));

