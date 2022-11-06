function colosseum(n, a) {
  let x = a.map((e, i) => {
    return { ele: e, ind: i };
  });
  let arr1 = x.slice(0, Math.floor(x.length / 2)).sort((a, b) => a.ele - b.ele);
  let arr2 = x
    .slice(Math.floor(x.length / 2), x.length)
    .sort((a, b) => a.ele - b.ele);
  let i = 0;
  let j = arr1.length - 1;
  let k = arr2.length - 1;
  while (n > 0) {
    if (j > k) {
      if (2 * arr1[j].ele < arr2[k].ele) {
        let b = 0;
        for (let m = 0; m < arr2.length; m++) {
          if (arr2[m].ele > arr1[j].ele) {
            b = m;
            break;
          }
        }
        a.splice(arr2[k].ind, 1);
        arr2.splice(b, 0, arr1[j]);
      } else {
        a.splice(arr1[i].ind, 1);
        i++;
      }
    } else {
      a.splice(arr2[k].ind, 1);
      k--;
    }
    n--;
  }
  return a.reduce(
    (prev, curr, currind) => (currind >= a.length/2 ? prev - curr : curr + prev),
    0
  );
}

console.log(colosseum(3, [1, 22, 25, 7, 5, 3, 7, 1, 7]));
console.log(colosseum(3, [7, 1, 7, 7, 5, 3, 1, 22, 25]));
console.log(colosseum(3, [1, 3, 7, 22, 1, 25, 7, 5, 3]));
