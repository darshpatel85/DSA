//https://leetcode.com/problems/container-with-most-water/

/**
 * @param {number[]} height
 * @return {number}
 */
var getArea = (a, b, dist) => {
  if (a < b) return a * dist;
  else return b * dist;
};
// not optimal
// var maxArea = function (height) {
//   let ans = 0;
//   for (let i = 1; i < height.length; i++) {
//     for (let j = 0; j < i; j++) {
//         let area = getArea(height[j], height[i],  i-j);
//         if(area > ans) ans = area;
//     }
//   }
//   return ans;
// };

var maxArea = function (height) {
  let ans = 0;
  let i = 0;
  let j = height.length-1;
  let curI = 0;
  let curJ = height.length-1;
  while(i < j){
      ans = getArea(height[curI], height[curJ], j - i) > ans ? getArea(height[curI], height[curJ], j - i) : ans;
      if(height[curI] < height[curJ]){
        if(height[curI] < height[i]){
            curI = i;
        }else{
            i++;
        }
      }else{
          if (height[curJ] < height[j]) {
            curJ = j;
          } else {
            j--;
          }
      }
  }
  return ans;
};
console.log(maxArea([1, 2, 6, 2, 5, 4, 8, 3, 3]));
console.log(maxArea([1, 1]));
console.log(maxArea([1,0, 0, 0, 9, 9, 8, 0,1]));

