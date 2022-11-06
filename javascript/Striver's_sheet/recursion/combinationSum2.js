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

var combinationSum = function (candidates, target,temp = [],ans =[]) {
  if (target === 0) {
    ans.push(temp);
  } else if (target > 0) {
    for (let i = 0; i < candidates.length; i++) {
      if(i === 0 || candidates[i-1] !== candidates[i])
      combinationSum(candidates.slice(i+1),target-candidates[i],[...temp,candidates[i]],ans);
    }
  }
  return ans;
};
var combinationSum2 = function (candidates, target) {
  //sort the array bcoz no repeatition and reduce unwanted iteration
  candidates = candidates.sort((a,b) => a-b);
  return combinationSum(candidates,target)
};
console.log(combinationSum2([2, 5, 2, 1, 2], 5));
