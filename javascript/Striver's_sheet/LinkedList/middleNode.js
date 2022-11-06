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

// https:leetcode.com/problems/middle-of-the-linked-list/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 var middleNode = function (head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

printList(middleNode(generateList([1,2,3])))
printList(middleNode(generateList([1,2,3,4,5,6])));
printList(middleNode(generateList([1, 2, 3, 4, 5, 6,7])));
printList(middleNode(generateList([1, 2, 3, 4, 5, 6,7,8])));

