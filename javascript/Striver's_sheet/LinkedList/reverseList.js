

// https://leetcode.com/problems/reverse-linked-list/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


var reverseList = function (head) {
  let newHead = null;
  //changing the direction of pointers
  while (head !== null) {
    //save the address of next node of current head
    const next = head.next; 
    // change address of current head to newHead we created
    head.next = newHead;
    //now move newHead to head so it point to first node of new list
    newHead = head;
    // move head to next so we can iterate through list
    head = next;
  }
  return newHead;
};


let generateList = (arr) => {
  if(!arr[0]) return null;
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


printList(reverseList(generateList([1,2,3,4,5])))
printList(reverseList(generateList([3, 4])));
printList(reverseList(generateList([1, 2, 3, 4])));
