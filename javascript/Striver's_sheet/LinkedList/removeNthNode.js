// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

const { generateList, printList } = require("../../LinkedList/LeetCodeList");

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let fast = head;
    let slow = head;
    while (n--) {
        fast = fast.next;
    }
    if(!fast){
        return head.next;
    }
    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return head;
};

printList(removeNthFromEnd(generateList([1,2,3,5]),3))
printList(removeNthFromEnd(generateList([1, 2, 3, 5]), 4));
printList(removeNthFromEnd(generateList([1, 2, 3, 5]), 2));
printList(removeNthFromEnd(generateList([1, 2, 3, 5]), 1));
printList(removeNthFromEnd(generateList([1]), 1));


