
const MergeSum = (items1, items2) => {
  items1 = items1.sort((a, b) => a[0] - b[0]);
  items2 = items2.sort((a, b) => a[0] - b[0]);
  let x = [];
let i =0 ;
let j = 0;
console.log(items1);

console.log(items2);
while (i<items1.length && j < items2.length) {
    if (items1[i][0] === items2[j][0]) {
      x.push([items1[i][0], items1[i][1] + items2[j][1]]);
      i++;
      j++;
    } else if (items1[i][0] < items2[j][0]) {
      x.push([items1[i][0], items1[i][1]]);
      i++;
    } else {
      x.push([items2[j][0], items2[j][1]]);
      j++;
    }
}
while (i<items1.length) {
     x.push([items1[i][0], items1[i][1]]);
     i++;
}
while (j<items2.length) {
   x.push([items2[j][0], items2[j][1]]);
   j++; 
}
  return x;
};


console.log(
  MergeSum(
    [
      [5, 1],
      [4, 2],
      [3, 3],
      [2, 4],
      [1, 5],
    ],[
    [7, 1],
    [6, 2],
    [5, 3],
    [4, 4]]
  )
);
