// https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1

function findPlatform(arr, dept, n) {
  // code here
  arr = arr.sort((a, b) => a - b);
  dept = dept.sort((a, b) => a - b);

  let platform = 1;
  let maxPlatform = 1;
  let i = 1;
  let j = 0;
  while (i < n && j < n) {
    if (arr[i] <= dept[j]) {
      platform++;
      i++;
    } else {
      platform--;
      j++;
    }
    maxPlatform = Math.max(platform, maxPlatform);
  }
  return maxPlatform;
}

console.log(
  findPlatform(
    [0900, 0940, 0950, 1100, 1500, 1800],
    [0910, 1200, 1120 ,1130 ,1900 ,2000],
    6
  )
);
