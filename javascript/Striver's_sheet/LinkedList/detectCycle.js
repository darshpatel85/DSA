// https://leetcode.com/problems/linked-list-cycle-ii/

var detectCycle = function (head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast)  {
            fast = head;

            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null;
};