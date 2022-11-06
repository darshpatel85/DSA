// https://leetcode.com/problems/permutation-sequence/

let fact = (n) => {
  if (n === 1 || n === 0) return 1;
  else return n * fact(n - 1);
};

var generatePermutation = function (arr, k) {
  if (arr.length === 1) {
    // if (k === 1) return "" + arr[0];
    return [arr[0]];
  } else {
    i = Math.floor(k  / fact(arr.length - 1));
    let per = [
      arr[i],
      ...generatePermutation(
        [...arr.slice(0, i), ...arr.slice(i + 1)],
        k % fact(arr.length - 1)
      ),
    ];
    return per;
  }
};

var getPermutation = function (n, k) {
  return generatePermutation(
    [...new Array(n).keys()].map((i) => i + 1),
    k-1
  ).join("");
};

console.log(getPermutation(1,1));

// var generatePermutation = function (arr, k) {
//   if (arr.length === 2) {
//     return [
//       [arr[0], arr[1]],
//       [arr[1], arr[0]],
//     ];
//   } else if (arr.length === 1) {
//     return [[arr[0]]];
//   } else {
//     let ans = [];
//     for (let i = 0; i < arr.length; i++) {
//       ans.push(
//         ...generatePermutation([...arr.slice(0, i), ...arr.slice(i + 1)]).map(
//           (k) => [arr[i], ...k]
//         )
//       );
//     }
//     return ans;
//   }
// };
