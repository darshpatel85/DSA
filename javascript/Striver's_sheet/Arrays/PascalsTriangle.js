// https://leetcode.com/problems/pascals-triangle/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
let nextRow = (prev) => {
    let a = [1];
    for (let i = 0; i+1 < prev.length; i++) {
        a.push(+prev[i]+ +prev[i+1]);
    }
    a.push(1);
    return a;
}

var generate = function(numRows) {
    let ans = [[1]];
    if(numRows === 1) return ans;
    for (let i = 2; i <= numRows; i++) {
         ans.push(nextRow(ans[i-2]))
    }
    return ans;
};


// console.log(generate(1));
console.log(generate(30));
