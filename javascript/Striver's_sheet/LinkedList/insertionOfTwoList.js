// https://leetcode.com/problems/intersection-of-two-linked-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    while (headA) {
        headA.visited = true;
        headA = headA.next;
    }
    while (headB) {
        if(headB.visited) return headB.val
        headB = headB.next;
    }
    return;
};