var permute = function (nums) {
    if (nums.length === 2) {
      return [
        [nums[0], nums[1]],
        [nums[1], nums[0]],
      ];
    } else if (nums.length === 1) {
      return [[nums[0]]];
    } else {
      let ans = [];
      for (let i = 0; i < nums.length; i++) {
        ans.push(
          ...permute([...nums.slice(0, i), ...nums.slice(i + 1)]).map(
            (k) => [nums[i], ...k]
          )
        );
      }
      return ans;
    }
};

console.log(permute([-1,1]));
