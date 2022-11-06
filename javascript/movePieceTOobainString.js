// https://leetcode.com/contest/weekly-contest-301/problems/move-pieces-to-obtain-a-string/

/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function (start, target) {
  let i = 0;
  let j = 0;
  start = start.split("");
  target = target.split("");
  let n = start.length;
  while (i < n || j < n) {
    while (i < n && target[i] == "_") i++;
    while (j < n && start[j] == "_") j++;

    if (i == n || j == n) {
      return i == n && j == n;
    }

    if (target[i] != start[j]) return false;

    if (target[i] == "L" ) {
      if (j < i) return false;
    } else {
      if (i < j) return false;
    }

    i++;
    j++;
  }
  return i == n && j == n;
};

console.log(canChange("_L__R__R_", "L______RR"));
console.log(canChange("_R", "R_"));
console.log(canChange("R_", "_R"));
