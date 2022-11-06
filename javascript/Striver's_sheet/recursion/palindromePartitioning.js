// https://leetcode.com/problems/palindrome-partitioning/

/**
 * @param {string} s
 * @return {string[][]}
 */
const isPalindrome = (arr) => {
    let i = 0;
    while (i < (arr.length/2)) {
        if(arr[i] === arr[arr.length-i-1]) i++;
        else return false;
    }
    return true;
}

var partition = function(s,temp=[],ans=[]) {
    s =Array.isArray(s) ? s : s.split("");
    if(s.length && isPalindrome(s)){
        ans.push([...temp.map(i => i.join('')),s.join('')])
    }
    for (let i = 0; i < s.length; i++) {
        if(isPalindrome(s.slice(0,i+1))){
            partition(s.slice(i+1),[...temp,s.slice(0,i+1)],ans);
        }
    }
    return ans
};

console.log(partition("a"));
console.log(partition("aacaa"));
