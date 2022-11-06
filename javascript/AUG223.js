process.stdin.resume();
process.stdin.setEncoding("utf8");
var name = "";
process.stdin.on("data", (chunk) => (name += chunk));

process.stdin.on("end", () => {
  let inputs = name.split("\n");
  let testCases = +inputs[0];
  for (let i = 0; i < testCases; i += 1) {
    let s = inputs[i + 1].split("");
    let zeros = [];
    let ones = [];
    for (let index = 0; index < s.length; index++) {
      if (s[index] == 0) zeros.push(index);
      else ones.push(index);
    }
    let m = 0;
    let n = 0;
    let t = 0;
    while (m < zeros.length && n < ones.length) {
      if (t === 2) {
        zeros.splice(m - 2, 2);
        t = 0;
        m -= 2;
      } else if (ones[n] < zeros[m]) {
        n++;
        t = 0;
      } else if (m + 1 < zeros.length) {
        if (zeros[m + 1] > ones[n]) {
          zeros.splice(m + 1, 1);
          zeros.shift();
          if (m > 0) m -= 1;
          t = 0;
        } else {
          t += 1;
          m += 1;
        }
      } else if (n + 1 < ones.length) {
        zeros.shift();
        if (m > 0) m -= 1;
        ones.pop();
        t = 0;
      } else {
        break;
      }
    }
    let x = "";
    m = 0;
    n = 0;
    while (m < zeros.length && n < ones.length) {
      if (zeros[m] < ones[n]) {
        x += "0";
        m++;
      } else {
        x += "1";
        n++;
      }
    }
    while (m < zeros.length) {
      x += "0";
      m++;
    }
    while (n < ones.length) {
      x += "1";
      n++;
    }
    console.log(x);
  }
});
