/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**/
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;
  
  if (list1.val > list2.val) {
    let temp = list1;
    list1 = list2;
    list2 = list2.next;
    list1.next = temp;
  }
  curr = list1;
  prev = null;
  while (curr && list2) {
    if (curr.val > list2.val) {
      prev.next = list2;
      list2 = list2.next;
      prev.next.next = curr; 
      prev = prev.next;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }
  if (list2) prev.next = list2;

  return list1;
};

let generateList = (arr) => {
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
// printList(mergeTwoLists(generateList([1, 3, 5]), generateList([2, 4, 6])));
// printList(mergeTwoLists( generateList([2, 4, 6]),generateList([1, 3, 5])));
// printList(mergeTwoLists(generateList([1, 2, 4]), generateList([1, 3, 4])));
// printList(mergeTwoLists(generateList([1, 2, 4]), generateList([11, 13, 14])));
// printList(mergeTwoLists(generateList([11, 13, 14]), generateList([1, 2, 4])));
// printList(mergeTwoLists(generateList([]), generateList([1, 2, 4])));
// printList(mergeTwoLists(generateList([2]), generateList([1])));
// printList(mergeTwoLists(generateList([1]), generateList([2])));
// printList(mergeTwoLists(generateList([11, 13, 14]), generateList([])));
printList(mergeTwoLists(generateList([5,6,7,8,9]), generateList([4])));
// printList(
//   mergeTwoLists(mergeTwoLists(generateList([6, 8]), generateList([5, 7, 9])),generateList[3,4])
// );
