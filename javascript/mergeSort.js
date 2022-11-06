const merge = (arr, left, mid, right) => {
  let x1 = arr.slice(left, mid+1);
  let x2 = arr.slice(mid+1, right+1);
  let i = 0;
  let j = 0;
  let k = left;
  while (i < x1.length && j < x2.length) {
    if (x1[i] < x2[j]) arr[k++] = x1[i++];
    else arr[k++] = x2[j++];
  }
  while (i < x1.length) {
    arr[k++] = x1[i++];
  }
  while (j < x2.length) {
    arr[k++] = x2[j++];
  }
};

const mergeSort = (arr, left, right) => {
  if (left < right) {
    let mid = Math.floor((right + left) / 2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
  }
  return arr;
};

console.log(mergeSort([5,6,7,8,9],0,4));