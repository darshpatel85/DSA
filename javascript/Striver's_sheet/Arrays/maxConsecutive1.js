// https://leetcode.com/problems/max-consecutive-ones/

    var findMaxConsecutiveOnes = function (nums) {
        let count = 0;
        let max = 0;
        for (let i = 0; i < nums.length; i++) {
            if(nums[i] === 1) count++;
            else count = 0;
            max = Math.max(count,max)
        }
        return count;
    };


console.log(findMaxConsecutiveOnes([0,1,1,1,0]));