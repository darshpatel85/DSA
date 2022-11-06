function getComb(arr,newEle) {
    arr.forEach(e => {
        arr.push(e+newEle)
    });
    arr.push(newEle);
}
function subsetSums(arr, n) {
  //code here
    ans = [arr[0]];
    for (let i = 1; i < n; i++) {
        getComb(ans,arr[i])
    }
    return [0,...ans];
}

console.log(subsetSums([5,2,1],3));