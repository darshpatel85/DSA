process.stdin.resume();
process.stdin.setEncoding("utf8");
var name = "";
process.stdin.on("data", (chunk) => (name += chunk));

process.stdin.on("end", () => {
  let inputs = name.split("\n");
  let testCases = +inputs[0];
  for (let i = 1; i < inputs.length - 1; i += 2) {
    let [n, x, y] = inputs[i].split(" ").map((j) => +j);
    let arr = inputs[i + 1]
      .split(" ")
      .map((j) => +j)
      .sort((a, b) => a - b);
    let m = 1;
    let k = 0;
    let minXored = 0;
    while (m <= y) {
      arr[k] = arr[k] ^ x;
      if (arr[minXored] > arr[k + 1]) {
        minXored = (arr[k + 1] ^ x) > arr[minXored] ? minXored : k + 1;
      } else {
        break;
      }
      k++;
      m++;
    }
    if (y > m && (y - m) % 2 === 0) arr[minXored] = arr[minXored] ^ x;
    arr = arr.sort((a, b) => a - b);
    console.log(arr.join(" "));
  }
});
