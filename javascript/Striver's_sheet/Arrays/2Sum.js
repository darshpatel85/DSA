// https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
  let x = {};

  for (let i = 0; i < nums.length ; i++) {
    x[target - nums[i]] = i;
  }
  console.log(x);
  for (let i = 0; i < nums.length; i++) {
    console.log(x[nums[i]],nums[i]);
    if(x[nums[i]] !== undefined) return [i,x[nums[i]]]
  }
};

console.log(twoSum([2,11,7,15],9));