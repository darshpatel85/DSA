// https://leetcode.com/problems/odd-even-linked-list/

const { printList, generateList } = require("./LeetCodeList");

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  let odd = head;
  if (!head) return head;
  let prev = head.next;
  if (!prev) return head;
  let curr = prev.next;
  if (!curr) return head;

  while (curr) {
    prev.next = curr.next;
    curr.next = odd.next;
    odd.next = curr;
    if (!prev.next) break;
      prev = prev.next;
      curr = prev.next;
      odd = odd.next;
    
  }
  return head;
};

printList(oddEvenList(generateList([1, 2, 3, 4, 5, 6, 7])));
printList(oddEvenList(generateList([1, 2, 3, 4, 5, 6, 7,8])));
printList(oddEvenList(generateList([1, 2, 3, 4])));
printList(oddEvenList(generateList([1, 2, 3])));
