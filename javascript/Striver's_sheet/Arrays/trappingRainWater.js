// https://leetcode.com/problems/trapping-rain-water/

// var trap = function (height) {
//   let trap = 0;
//   for (let i = 0; i < height.length - 1; i++) {
//     if (height[i + 1] < height[i]) {
//       currMax = i + 1;
//       let bigWallFound = false;
//       let obstacles = height[i + 1];
//       for (let j = i + 2; j < height.length; j++) {
//         currMax = height[currMax] >= height[j] ? currMax : j;
//         if (height[j] >= height[i]) {
//           trap += Math.min(height[i], height[j]) * (j - i-1) - obstacles;
//           bigWallFound = true;
//           i = j-1;
//           break;
//         }
//         obstacles += height[j];
//       }
//       if (!bigWallFound && currMax > i + 1) {
//         let temp  = 0;
//         for (let m = i+1; m < currMax; m++) {
//                 temp += height[m]
//             }
//           trap +=
//           Math.min(height[i], height[currMax]) * (currMax - i-1) - temp;
//           i = currMax-1;
//         }
//     }
//   }
//   return trap;
// };

var trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let ans = 0;
  while (left <= right) {
    let limitingBar = Math.min(leftMax,rightMax)
    if (height[left] > leftMax) {
      leftMax = height[left];
      // right--;
      continue;
    }
    if (height[right] > rightMax) {
      rightMax = height[right];
      // left++;
      continue;
    }
    if (height[left] < height[right]) {
      ans += limitingBar - height[left];
      left++;
    } else {
      ans += limitingBar - height[right];
      right--;
    }
  }
  return ans;
};
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 6]));
console.log(trap([6, 2, 4]));
console.log(trap([4, 2, 0, 3, 2, 5]));
console.log(trap([9, 16, 14, 15, 15, 8, 12, 10, 13, 13, 13]));
console.log(trap([5, 5, 1, 7, 1, 1, 5, 2, 7, 6]));

