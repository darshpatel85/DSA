// https://practice.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1

function maxLen(arr, n) {
  //code here
  let maxLength = 0;
  let sum = 0;
  let hash = {};
  for (let i = 0; i < n; i++) {
    if(arr[i]+sum === 0){
        maxLength = Math.max(maxLength, i+1);
    }
    if(hash[arr[i]+sum] !== undefined){
        maxLength = Math.max(maxLength,i-hash[arr[i]+sum]);
    }else{
        hash[arr[i] + sum] = i;
    }
    sum = sum + arr[i];
  }   
  return maxLength;
}

console.log(maxLen([-1 ,1 ,-1, 1], 4));
