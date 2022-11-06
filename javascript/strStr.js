// https://leetcode.com/problems/implement-strstr/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0;
  let ni = 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[ni]) {
      ni++;
    } else {
      i = i - ni ;
      ni = 0;
    }
    if (ni === needle.length) return i - needle.length + 1;
  }
  return -1;
};

console.log(strStr("hello", "ll"));
console.log(strStr("hello", ""));
console.log(strStr("hello", "he"));
console.log(strStr("a", "a"));
console.log(strStr("mississippi", "issip"));
