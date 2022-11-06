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
// https://leetcode.com/problems/rotate-list/description/

var rotateRight = function (head, k) {
  let n = 0;
  let curr = head;
  while (curr) {
    curr = curr.next;
    n += 1;
  }
  k = n - k % n;
  if(k === n || n === 0) return head;
  p1 = head;
  p2 = head;
  p3 = head;
  let i = 1;
  while (i < k) {
    p2 = p2.next;
    p3 = p3.next;
    i++;
  }
  while (p3.next) {
    p3 = p3.next;
  }
  p3.next = p1;
  p1 = p2.next;
  p2.next = null;

  return p1;
};

printList(rotateRight(generateList([1, 2, 3, 4]), 1));
printList(rotateRight(generateList([1, 2, 3, 4]), 2));
printList(rotateRight(generateList([1, 2, 3, 4]), 3));
printList(rotateRight(generateList([1, 2, 3, 4]), 4));
printList(rotateRight(generateList([1, 2, 3, 4]), 5));


