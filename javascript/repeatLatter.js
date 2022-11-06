/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
    s = s.split("");
    let hash = {};
    for (let index = 0; index < s.length; index++) {
        if(hash[s[index]] === undefined){
            hash[s[index]] = 1;
        }else{
            return s[index];
        }
    }
};


console.log(repeatedCharacter("abcdd"));