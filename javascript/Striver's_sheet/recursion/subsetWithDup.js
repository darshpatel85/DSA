// https://leetcode.com/problems/subsets-ii/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function getComb(arr, newEle) {
  let k = [];
    arr.forEach((e) => {
    k.push([...e, newEle]);
  });
  return k;
}
function subsetsWithDup(arr) {
  //code here
  arr = arr.sort((a,b)=>a-b)
  let ans = [];
  let newEles = [];
  for (let i = 0; i < arr.length; i++) {
    if(i>0 && arr[i] === arr[i-1]) newEles = getComb(newEles, arr[i]);
    else newEles = [...getComb(ans, arr[i]),[arr[i]]];
    ans = [...ans,...newEles]
  }
  return [[], ...ans];
}

console.log(subsetsWithDup([1,2,2]));
// console.log(subsetsWithDup([2, 2]));
// console.log(subsetsWithDup([2]));
console.log(subsetsWithDup([2,2,2,2,2]));
