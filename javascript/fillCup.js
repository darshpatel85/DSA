// https://leetcode.com/contest/weekly-contest-301/problems/minimum-amount-of-time-to-fill-cups/

/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function (amount) {
  count = -1;
  let closeLoop = true;
  do {
    max = 0;
    for (let i = 0; i < amount.length; i++) {
      if (amount[max] < amount[i]) max = i;
    }
    sMax = max === 0 ? 1 : 0;
    for (let i = 0; i < amount.length; i++) {
      if (amount[sMax] < amount[i] && i !== max) sMax = i;
    }
    closeLoop = amount[max] || amount[sMax];
    amount[max] = amount[max] === 0 ? amount[max] : amount[max] - 1;
    amount[sMax] = amount[sMax] === 0 ? amount[sMax] : amount[sMax] - 1;
    count++;
  } while (closeLoop);
  return count;
};

console.log(fillCups([5, 4, 4]));
console.log(fillCups([4, 4, 4]));
console.log(fillCups([0, 0, 0]));
console.log(fillCups([1, 1, 1]));
