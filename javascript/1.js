function solve(n, a, x) {

  let maxIndex = 0;
  let sMaxIndex = 0;
  x = x.map(i => i-a > 0 ? i-a : a-i)
  if(x[0] > x[1]) sMaxIndex = 1;
  else maxIndex = 1;
  for (let j = 0; j < x.length; j++) {
    if (x[maxIndex] <= x[j]) {
      maxIndex = j; 
    }
  }
  for (let j = 0; j < x.length; j++) {
    if(j !== maxIndex && x[j] >= x[sMaxIndex])
    sMaxIndex = j; 
  }
  return x[maxIndex] + x[sMaxIndex]
}

console.log(solve(10, 7, [ 9, 9, 3, 1, 7, 9, 5, 6, 5, 4]));
console.log(solve(2, 1, [4,5]));
console.log(solve(4, 2, [10, 9]));
console.log(solve(4, 2, [9,10]));

