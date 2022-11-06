// https://leetcode.com/problems/sort-list/

//still remains
const { printList, generateList } = require("./LeetCodeList");

var swapNode = function (node1, node2) {
  node1.val = node1.val + node2.val;
  node2.val = node1.val - node2.val;
  node1.val = node1.val - node2.val;
};

var merge = (start,pointer) => {

}

var mergeSort = function (start, end, size) {
  if (start.next !== end) {
    let pointer = head;
    let i = 0;
    while (i < size / 2) {
      pointer = pointer.next;
      i++;
    }
    mergeSort(start, pointer, size / 2);
    mergeSort(pointer, end, size / 2);
  }
    merge(start,pointer);
};

var sortList = function (head) {
  let pointer = head;
  let size = 0;
  while (pointer) {
    pointer = pointer.next;
    size++;
  }

  mergeSort(head, null, size);
};

printList(generateList([3, 2, 1, 4]));
