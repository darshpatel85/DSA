const runINMaze = (m,i=0,j=0,paths=[],ans=[]) => {
    if(i=== m.length-1 && j === m.length-1 && m[i][j] ===1) {
        ans.push(paths.join(''));
    }
    else if(m[i][j] !== 0){
        m[i][j] = 0;
        if(i>0){
          runINMaze(m,i-1,j,[...paths,"U"],ans);
        }
        if (j > 0) {
          runINMaze(m, i, j-1, [...paths, "L"], ans);
        }
        if (i+1 <m.length) {
          runINMaze(m, i + 1, j , [...paths, "D"], ans);
        }
        if (j+1 <m.length) {
          runINMaze(m, i, j + 1, [...paths, "R"], ans);
        }
        m[i][j] = 1;
    }
    return ans;
}

const findPath = (m, n) => {
    let x = runINMaze(m);
    if(x.length > 0)
    return x.sort()
    return -1
};

console.log(
  findPath(
    [
      [1, 1, 0, 0],
      [1, 1, 0, 1],
      [1, 1, 0, 0],
      [0, 1, 1, 1],
    ],
    4
  )
);
console.log(
  findPath(
    [
      [1, 0],
      [0, 1]
    ],
    2
  )
);