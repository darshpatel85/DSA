// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
      switch (s[i]) {
        case "}":
          if (stack[stack.length - 1] === "{") stack.pop();
          else return false;
          break;
        case ")":
          if (stack[stack.length - 1] === "(") stack.pop();
          else return false;
          break;
        case "]":
          if (stack[stack.length - 1] === "[") stack.pop();
          else return false;
          break;
        default:
            stack.push(s[i])
          break;
      }
  }
  if(stack.length === 0 ) return true;
  return false;
};

console.log(isValid("{{{[[]](())}}}"));
console.log(isValid("{{{[[]]())}}}"));
console.log(isValid("{{{[[](())}}}"));
