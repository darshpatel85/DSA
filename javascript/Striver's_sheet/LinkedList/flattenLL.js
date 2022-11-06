// https://practice.geeksforgeeks.org/problems/flattening-a-linked-list/1

class Solution {
  mergeTwoLists(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;

    if (list1.data > list2.data) {
      let temp = list1;
      list1 = list2;
      list2 = list2.bottom;
      list1.bottom = temp;
    }
    let curr = list1;
    let prev = null;
    while (curr && list2) {
      if (curr.data > list2.data) {
        prev.bottom = list2;
        list2 = list2.bottom;
        prev.bottom.bottom = curr;
        prev = prev.bottom;
      } else {
        prev = curr;
        curr = curr.bottom;
      }
    }
    if (list2) prev.bottom = list2;

    return list1;
  }
  flatten(head) {
    //your code here
    let main = head;
    while (main.next) {
      let nextPointer = main.next;
      main.next = main.next.next;
      printList(main);
      printList(nextPointer);
      main = this.mergeTwoLists(main, nextPointer);
    }
    return head;
  }
}

// 2
// 11 17
// 163 187 374 463 560 577 652 771 836 927 978 153 163 170 187 237 290 351 374 463 560 577 652 771 797 836 927 978
