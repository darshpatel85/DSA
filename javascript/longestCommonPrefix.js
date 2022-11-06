//leetcode.com/problems/longest-common-prefix/

/**
 * @param {string} s
 * @return {number}
 */
var getCommonPrefix = (ele1,ele2) => {
    let longestPrefix = [];
    let i = 0;
    while (true) {
        if (ele1[i] && ele2[i] && ele1[i] === ele2[i]) {
            longestPrefix.push(ele1[i]);
            i++;
        } else {
            break;
        }
    }
    return longestPrefix.join("");
}


var longestCommonPrefix = function (strs) {
    if(strs.length === 1) return strs[0]
    let ele1 = strs[0];
    let ele2 = strs[1];
    let longestPrefix = getCommonPrefix(ele1,ele2);
    for (let i = 2; i < strs.length; i++) {
        longestPrefix = getCommonPrefix(strs[i],longestPrefix);
    }
    return longestPrefix;
};

console.log(longestCommonPrefix(["flower", "", "flight"]));
console.log(longestCommonPrefix(["flower"]));
console.log(longestCommonPrefix(["flower", "flowerflow", "flowerflight"]));
console.log(longestCommonPrefix(["flower", "flow", ""]));
console.log(longestCommonPrefix(["flower", "vflow", "cflight"]));
