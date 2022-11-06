// https://leetcode.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
// var generateParenthesis = function (n) {
//   let ans = ["()"];
//   for (let i = 1; i < n; i++) {
//     let newArr = [`${ans[0]}()`];
//     for (let j = 0; j < ans.length; j++) {
//       let paranth = ans[j].indexOf("(", 0);
     
//       while (paranth >= 0) {
//         newArr.includes(
//           `${ans[j].slice(0, paranth + 1)}()${ans[j].slice(
//             paranth + 1,
//             ans[j].length
//           )}`
//         ) ||
//           newArr.push(
//             `${ans[j].slice(0, paranth + 1)}()${ans[j].slice(
//               paranth + 1,
//               ans[j].length
//             )}`
//           ); 
//         paranth = ans[j].indexOf("(", paranth+1);
          
//       }
//     }
//     ans = [...newArr];
//     newArr.length = 0;
//   }
//   return ans;
// };


function generateParenthesis(n) {
  let ans = [];
  function gen(open,close,str='') {
    if(open===close && open===n){
        ans.push(str);
        return; 
    }
    if(open<n){
        gen(open+1,close,str+"(");
    }
    if(open > close){
        gen(open,close+1,str+")");
    }

  }
  gen(0,0);
  return ans;
}
console.log(generateParenthesis(1));
console.log(generateParenthesis(2));
console.log(generateParenthesis(3));
console.log(generateParenthesis(4));



[
  "()()()()",
  "(())()()",
  "()(())()",
  "()()(())",
  "(()())()",
  "((()))()",

  "(())(())",
  "(())(())",

  "()(()())",
  "()((()))",
  "(()()())",
  "((())())",
  "(()(()))",
  "(()(()))",
  "((()()))",
  "(((())))",
];