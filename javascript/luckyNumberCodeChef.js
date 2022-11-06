process.stdin.resume();
process.stdin.setEncoding("utf8");
var name = "";
process.stdin.on("data", (chunk) => (name += chunk));

process.stdin.on("end", () => {
  let inputs = name.split("\n");
  let testCases = +inputs[0];
  let count = 0;
  for (let index = 0; index < testCases; index++) {
    let luckyNumber = inputs[++count].split(" ");
    let numberOfInput = luckyNumber[0];
    let bob = 0;
    let alice = 0;
    let common = 0;
    let numbers = inputs[++count].split(" ");

    for(let index = 0; index < numberOfInput; index++){
        if (
          numbers[index] % luckyNumber[1] == 0 &&
          numbers[index] % luckyNumber[2] == 0
        ) {
            common++;
            continue;
        }
        if(numbers[index] % luckyNumber[1] == 0){
            bob++;
            continue;
        }
         if(numbers[index] % luckyNumber[2] == 0){
            alice++;
            continue;
        }
    }

    if(common%2 != 0){
        bob += 1;
    }

    if(bob > alice){
        console.log("BOB")
    }else {
        console.log("ALICE")
    }
  }
});
// your code goes here
