// https://leetcode.com/problems/combination-sum/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum = function(candidates, target,temp = [],ans = [],k = 0) {
    //create all possible combinations and check for sum
    // we use k so that all possible combinations are unique as loop is checking all afterward elements 
        if (target === 0) {
            //when target = 0 means sum of the all the value in temp is equal to target
          ans.push(temp);
        } else if (target > 0) {
          for (let i = k; i < candidates.length; i++) {
            combinationSum(
              candidates,
              target - candidates[i],
              [...temp, candidates[i]],
              ans,
              i
            );
          }
        }
        return ans;
};

console.log(combinationSum([2, 3,5], 8));