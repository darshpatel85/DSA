// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

/**
 * @param {string} digits
 * @return {string[]}
 */
const NUM = ['abc',"def","ghi","jkl","mno","pqrs","tuv","wxyz"]

var letterCombinations = function(digits) {
    let ans = [];
    for (let i = 0; i < digits.length; i++) {
    let newAns = [];
        if (ans.length > 0)
          for (let j = 0; j < ans.length; j++) {
            for (let k = 0; k < NUM[digits[i] - 2].length; k++) {
              newAns.push(`${ans[j]}${NUM[digits[i] - 2][k]}`);
            }
          }
        else
          for (let k = 0; k < NUM[digits[i] - 2].length; k++) {
            newAns.push(`${NUM[digits[i] - 2][k]}`);
          }
        ans = [...newAns]
        newAns.length = 0; 
    }
    return ans;
};

console.log(letterCombinations("23"));
console.log(letterCombinations("54"));
console.log(letterCombinations("7979"));

