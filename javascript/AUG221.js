process.stdin.resume();
process.stdin.setEncoding("utf8");
var name = "";
process.stdin.on("data", (chunk) => (name += chunk));

process.stdin.on("end", () => {
  let inputs = name.split("\n");
  let testCases = +inputs[0];
  for (let i = 1; i <= testCases; i += 1) {
    let x = +inputs[i];
    let found = false;
    for (let j = 1; j < x / 2; j++) {
      if ((x - 2 * j) % (j + 2) === 0) {
        found = true;
        break;
      }
    }
    if (found) console.log("YES");
    else console.log("NO");
  }
});


