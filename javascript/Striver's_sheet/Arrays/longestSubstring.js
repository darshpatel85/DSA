// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  s = s.split("");
  x = {};
  let maxLength = 0;
  let length = 0;
  for (let index = 0; index < s.length; index++) {
    if (x[s[index]] === undefined) {
      length++;
    } else {
      length = Math.min(index - x[s[index]],length+1);
    }
    x[s[index]] = index;

    maxLength = Math.max(length, maxLength);
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcb"));
console.log(lengthOfLongestSubstring("abcabcbbb"));
console.log(lengthOfLongestSubstring("bbbbbbbb"));
console.log(lengthOfLongestSubstring(""));
console.log(lengthOfLongestSubstring("abccba"));
console.log(lengthOfLongestSubstring("aabbabc"));
