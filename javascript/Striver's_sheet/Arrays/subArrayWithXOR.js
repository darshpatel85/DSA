// https://www.interviewbit.com/problems/subarray-with-given-xor/

function solve(A, B) {
  let requiredXor = {};
  let totalXor = 0;
  let length = 0;
  for (let index = 0; index < A.length; index++) {
    totalXor ^= A[index];
    if(totalXor === B){
        length++;
    }
    let required = totalXor ^ B;
    if (requiredXor[required] !== undefined){
        length += requiredXor[required]
    }
      if (requiredXor[totalXor] !== undefined) {
        requiredXor[totalXor] += 1;
      } else {
        requiredXor[totalXor] = 1;
      }
  }
  return length;
}

console.log(solve([4, 2, 2, 6, 4], 6));
console.log(solve([5,6,7,8,9], 5));
console.log(solve([25, 79, 59, 63, 65, 6, 46, 82, 28, 62], 94));

;
