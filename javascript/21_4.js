/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let isNegative = false;
    if(x < 0){
        isNegative = true;
        x = -x;
    }
    let num = x.toString().split('');
    for (let i = 0; i < num.length / 2; i++) {
        let temp = num[i];
         num[i] = num[num.length - i -1];
        num[num.length - i - 1] = temp;
    }
    x = +num.join('');
    if(isNegative){
        x = -x;
    }
    if(x > (Math.pow(2,31)+1) || x < -Math.pow(2,31)) return 0
    return x;
};


console.log(reverse(-Math.pow(2,31)));
console.log(reverse(0));
console.log(reverse(-99));
console.log(reverse(99));
console.log(reverse(989));
console.log(reverse(1989));



