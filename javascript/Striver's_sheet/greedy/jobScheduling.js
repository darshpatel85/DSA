function JobScheduling(arr, n) {
  // code here
//   let ans = []
//   arr = arr.sort((a, b) => a.dead - b.dead);
//   for (let index = 0; index < n; index++) {
//     let j = 0;
//     while (ans.length>0 && ans[j]<arr[index].profit) {
//         j+=1;
//     }
//     ans.splice(j, 0, arr[index].profit);
//     if(ans.length > arr[index].dead){
//         ans.shift();
//     }
//   }
  arr = arr.sort((a, b) => b.profit - a.profit);
  scheduled = {};
  for (let index = 0; index < n; index++) {
    let t = arr[index].dead;
    while(t > 0 && scheduled[t] !== undefined){
        t-=1;
    }
    if (t > 0) scheduled[t] = arr[index].profit;
  }
  let ans = Object.values(scheduled);
  return [ans.length, ans.reduce((prev, val) => prev + val, 0)];
}

console.log(
  JobScheduling(
    [
      {
        id: 1,
        dead: 2,
        profit: 25,
      },
      {
        id: 2,
        dead: 1,
        profit: 100,
      },
      {
        id: 3,
        dead: 4,
        profit: 99,
      },
      {
        id: 4,
        dead: 3,
        profit: 101,
      },
      {
        id: 5,
        dead: 3,
        profit: 102,
      },
      {
        id: 6,
        dead: 3,
        profit: 10000,
      },
    ],
    6
  )
);
