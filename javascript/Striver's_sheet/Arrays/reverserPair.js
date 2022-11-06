// https://leetcode.com/problems/reverse-pairs/

const merge = (arr, left, mid, right, count) => {
  let x1 = arr.slice(left, mid + 1);
  let x2 = arr.slice(mid + 1, right + 1);
  let i = 0;
  let j = 0;
  let k = left;
  while (i < x1.length) {
    while(j<x2.length && x1[i] > 2*x2[j]){
      j++;
    }
    i++;
    count += j;
  }
  i=0;
  j=0;
  while (i < x1.length && j < x2.length) {
    if (x1[i] < x2[j]) arr[k++] = x1[i++];
    else {
      arr[k++] = x2[j++];
    }
  }
  while (i < x1.length) {
    arr[k++] = x1[i++];
  }
  while (j < x2.length) {
    arr[k++] = x2[j++];
  }
  return count;
};

const mergeSort = (arr, left, right, count = 0) => {
  if (left < right) {
    let mid = Math.floor((right + left) / 2);
    count = mergeSort(arr, left, mid, count);
    count = mergeSort(arr, mid + 1, right, count);
    count = merge(arr, left, mid, right, count);
  }
  return count;
};

const reversePairs = (arr) => {
  return mergeSort(arr, 0, arr.length - 1);
};

console.log(reversePairs([1, 3, 2, 4, 1]));
console.log(reversePairs([2, 4, 3, 5, 1]));
console.log(reversePairs([4, 5, 1, 1, 1]));
console.log(reversePairs([1, 4, 2]));
console.log(reversePairs([351, 175, 87, 43, 21, 10, 4, 1]));
console.log(reversePairs([-5, -5]));
