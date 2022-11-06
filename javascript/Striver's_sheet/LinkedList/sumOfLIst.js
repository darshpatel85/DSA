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

// https://leetcode.com/problems/add-two-numbers/
var addTwoNumbers = function (l1, l2) {
  let c = 0;
  let sumList = null;
  let point = null;
  while (l1 || l2 || c) {
    let s = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + c;
    c = Math.floor(s / 10);
    s = s % 10;
    let newHead = new ListNode(s);
    if (point) {
      point.next = newHead;
     point = point.next;
    } else {
      sumList = newHead;
      point = sumList;
    }
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }
  return sumList;
};
printList(addTwoNumbers(generateList([1, 2, 3]), generateList([9, 9, 9,9,9])));
printList(addTwoNumbers(generateList([1]), generateList([9, 2, 8])));
printList(addTwoNumbers(generateList([0]), generateList([9])));
