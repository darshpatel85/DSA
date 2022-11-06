// https://leetcode.com/contest/weekly-contest-305/problems/reachable-nodes-with-restrictions/

var visitNodes = (x, nodes, visited,count) => {
  for (let i = 0; i < nodes.length; i++) {
    if (x[nodes[i]] !== undefined && visited[nodes[i]] !== true) {
      visited[nodes[i]] = true;
      count = visitNodes(x, x[nodes[i]], visited, count) + 1;
    }
  }
 return count;
};
var reachableNodes = function (n, edges, restricted) {
  let x = {};
  for (let i = 0; i < edges.length; i++) {
    if (x[edges[i][0]] === undefined) {
      x[edges[i][0]] = [edges[i][1]];
    } else {
      x[edges[i][0]] = [...x[edges[i][0]], edges[i][1]];
    }
    if (x[edges[i][1]] === undefined) {
      x[edges[i][1]] = [edges[i][0]];
    } else {
      x[edges[i][1]] = [...x[edges[i][1]], edges[i][0]];
    }
  }
  for (let i = 0; i < restricted.length; i++) {
    x[restricted[i]] = undefined;
  }
//   console.log(x);
  getCount = visitNodes(x, x[0], { 0: true },1);
  return getCount;
};

console.log(
  reachableNodes(
    7,
    [
      [0, 1],
      [0, 2],
      [0, 5],
      [0, 4],
      [3, 2],
      [6, 5],
    ],
    [4, 2, 1]
  )
);
console.log(
  reachableNodes(
    7,
    [
      [0, 1],
      [1, 2],
      [3, 1],
      [4, 0],
      [0, 5],
      [5, 6],
    ],
    [4, 5]
  )
);