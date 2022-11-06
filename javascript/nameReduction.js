process.stdin.resume();
process.stdin.setEncoding("utf8");
var name = "";
process.stdin.on("data", (chunk) => (name += chunk));

process.stdin.on("end", () => {
  let inputs = name.split("\n");
  let testCases = +inputs[0];
  let count = 1;
  for (let index = 0; index < testCases; index++) {
    console.log(count)
    let parent = inputs[count++].replace(" ", "");
    let childCount = +inputs[count];
    let child = "";
    for (let j = 0; j < childCount; j++) {
      child += inputs[++count];
    }
    //Count iterations of characters
    let characterCounts = {};
    parent.split("").forEach((element) => {
      if (characterCounts.hasOwnProperty(element)) {
        characterCounts[element] += 1;
      } else {
        characterCounts[element] = 1;
      }
    });
    console.log(characterCounts);
    //Check possibility of required count of characters
    child = child.split("");
    let wasFailed = false;
    for (let ind = 0; ind < child.length; ind++) {
      if (
        characterCounts.hasOwnProperty(child[ind]) &&
        characterCounts[child[ind]] != 0
      ) {
        characterCounts[child[ind]] -= 1;
      } else {
        console.log("NO");
        wasFailed = true;
        break;
      }
    }
    if (!wasFailed) {
      console.log("YES");
    }
  }
});
// your code goes here
