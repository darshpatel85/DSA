// https://leetcode.com/contest/weekly-contest-307/problems/largest-palindromic-number/

/**
 * @param {string} num
 * @return {string}
 */
var largestPalindromic = function (num) {
  let hash = {};
  num = num.split("");
  for (let i = 0; i < num.length; i++) {
    if (hash[num[i]] === undefined) {
      hash[num[i]] = 1;
    } else {
      hash[num[i]] += 1;
    }
  }
  let len = Object.keys(hash).length;
  let ans = "";
  for (let i = len - 1; i >= 0; i--) {
    if (hash[Object.keys(hash)[i]] % 2 === 1) {
      ans += Object.keys(hash)[i];
      hash[Object.keys(hash)[i]] -= 1;
      break;
    }
  }
  for (let i = 0; i < len; i++) {
    if (
      hash[Object.keys(hash)[i]] > 0 &&
      hash[Object.keys(hash)[i]] % 2 === 0
    ) {
      let temp = new Array(hash[Object.keys(hash)[i]] / 2)
        .fill(Object.keys(hash)[i])
        .join("");
      ans = temp + ans + temp;
    } else if (hash[Object.keys(hash)[i]] > 1) {
      let temp = new Array((hash[Object.keys(hash)[i]] - 1) / 2)
        .fill(Object.keys(hash)[i])
        .join("");
      ans = temp + ans + temp;
    }
  }
  ans = ans.split("");
  let n = ans.length;
  n = n%2 === 1 ? (n/2)-1 : n/2;
  for (let i = 0; i < n; i++) {
    if (ans[i] === "0") {
      delete ans[i];
      delete ans[ans.length - i - 1];
    } else {
      break;
    }
  }
  ans = ans.join("");
  if(ans == "" && hash[0] > 0) ans = "0";
  return ans
};

console.log(largestPalindromic("0444947137330"));
console.log(largestPalindromic("00001105"));
console.log(largestPalindromic("00009"));
console.log(largestPalindromic("0000"));
console.log(largestPalindromic("00000"));
