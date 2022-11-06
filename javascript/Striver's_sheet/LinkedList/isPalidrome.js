// https://leetcode.com/problems/palindrome-linked-list/

const { generateList, printList } = require("../../LinkedList/LeetCodeList");



/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let len = 0;
    let pointer = head;
    while(pointer){
        pointer = pointer.next;
        len++;
    }
    pointer = head;
    let middle = Math.floor(len / 2);
    let stack = [];
    let i = 0;
    while(i < middle){
        stack.push(pointer.val);
        pointer = pointer.next;
        middle--;
    }
    if(len%2 === 1) pointer = pointer.next;
    while(pointer){
        if(pointer.val === stack.pop()) pointer = pointer.next;
        else return false;
    }
    return true;
};

var reverse = (head) =>{
    let prev = null;
    while (head) {
        let x = head.next;
        head.next = prev;
        prev = head;
        head = x;
    }
    return prev;
}
var isPalindrome = function (head) {
     let slow = head;
     let fast = head;

     while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
     }
     slow.next = reverse(slow.next);

    //  printList(slow);
     slow = slow.next;
     fast = head;
      while (slow) {
        if(fast.val !== slow.val) return false;
        slow = slow.next;
        fast = fast.next;
      }
      return true;
};

console.log(isPalindrome(generateList([0, 1, 2, 1, 0])));
console.log(isPalindrome(generateList([0, 1, 2, 3, 0])));
console.log(isPalindrome(generateList([0, 1, 1, 0])));
console.log(isPalindrome(generateList([0,1, 0])));

