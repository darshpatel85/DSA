// https://leetcode.com/problems/divide-two-integers/

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let isNegative = false;
    if(dividend < 0){
        isNegative =!isNegative;
        dividend = -dividend;
    }
    if (divisor < 0) {
      isNegative = !isNegative;
      divisor = -divisor;
    }
    let result = 0;
    while(dividend >= divisor){
        let temp  = divisor;
        let i = 1;
        while (dividend >= temp) {
            dividend -= temp;
            result += i;
            i*= 2;
            temp *=2;
        }
    }
    result = isNegative ? -result : result;
    if(result > Math.pow(2,31)-1){
        return Math.pow(2, 31) - 1;
    }
    if(result < Math.pow(-2,31)){
        return Math.pow(-2,31)
    }
    return result
};


console.log(divide(6,3));
console.log(divide(30, 2));
console.log(divide(31, 2));
console.log(divide(0, 3));
console.log(divide(-5, 3));
console.log(divide(6, -3));
console.log(divide(5, -1));
console.log(divide(-2147483648, -2));
console.log(divide(Math.pow(2,31)-1, -1),(Math.pow(2,31)-1)/ -1);
console.log(divide(Math.pow(-2, 31), -1), Math.pow(-2, 31)/ -1);

