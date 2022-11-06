function fractionalKnapsack(W, arr, n) {
  // code here
  arr = arr.sort((a, b) => b.value / b.weight - a.value / a.weight);
  let ans = 0;
  for (let index = 0; index < arr.length; index++) {
    if (W - arr[index].weight > 0) {
      ans += arr[index].value;
      W -= arr[index].weight;
    } else {
      ans += (W * arr[index].value) / arr[index].weight;
      break;
    }
    if (W === 0) break;
  }
  return ans;
}

console.log(
  fractionalKnapsack(
    50,
    [
      { value: 60, weight: 10 },
      { value: 100, weight: 20 },
      { value: 120, weight: 30 },
    ],
    3
  )
);
