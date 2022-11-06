function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let generateList = (arr) => {
  if (!arr[0]) return null;
  let head = new ListNode(arr[0]);
  let l = head;
  arr.splice(1).forEach((e) => {
    l.next = new ListNode(e);
    l = l.next;
  });
  return head;
};

let printList = (node, ...ar) => {
  let arr = [];
  while (node) {
    arr.push(node.val);
    node = node.next;
  }
  console.log(arr.join(" => "), ...ar);
  return;
};
// https://leetcode.com/problems/reverse-nodes-in-k-group/
var reverseKGroup = function (head, k) {
    let curr = head;
    let m = 0;
    while (curr) {
      curr = curr.next;
      m++;
    }
    if (m < k) return null;
    let main = null;
    m = 0;
    curr = head;
    while (m < k) {
      let next = head.next;
      head.next = main;
      main = head;
      head = next;
      m++;
    }
    curr.next = reverseKGroup(head, k) ?? head;
    return main;
};
printList(reverseKGroup(generateList([1, 2, 3, 4, 5,6,7]), 1));
printList(reverseKGroup(generateList([1, 2, 3, 4, 5, 6, 7]), 2));
printList(reverseKGroup(generateList([1, 2, 3, 4, 5, 6, 7]), 3));
printList(reverseKGroup(generateList([1, 2, 3, 4, 5, 6, 7]), 4));
printList(reverseKGroup(generateList([1, 2, 3, 4, 5, 6, 7]), 5));
printList(reverseKGroup(generateList([1, 2, 3, 4, 5, 6, 7]), 6));
printList(reverseKGroup(generateList([1, 2, 3, 4, 5, 6, 7]), 7));




// printList(reverseKGroup(generateList([1, 2, 3, 4]), 4));
