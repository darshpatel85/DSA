/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  let newList = null;
  let newListHead = null;
  let pointer = head;
  //creating normal list with undefined random pointer
  if (pointer) {
    newList = new Node(pointer.val);
    newListHead = newList;
    pointer = pointer.next;
  }
  while (pointer) {
    newList.next = new Node(pointer.val);
    pointer = pointer.next;
    newList = newList.next;
  }

  //fill the random pointer
  let NCurPointer = newListHead;
  let OCurPointer = head;
  let NrandomPointer = null;
  let OrandomPointer = null;

  while (OCurPointer) {
    let f = 0;
    //  case 1 : if random pointer pointing to node itself
    if (OCurPointer.random === OCurPointer) {
      NCurPointer.random = NCurPointer;
      f = 1;
    }
    OrandomPointer = OCurPointer;
    NrandomPointer = NCurPointer;
    //  case 2 : if random pointer pointing to any node after itself
    while (f !== 1 && OrandomPointer) {
      OrandomPointer = OrandomPointer.next;
      NrandomPointer = NrandomPointer.next;
      if (OCurPointer.random === OrandomPointer) {
        NCurPointer.random = NrandomPointer;
        f = 2;
        break;
      }
    }
    //  case 3 : if random pointer pointing to any node before itself
    OrandomPointer = OCurPointer.random;
    NrandomPointer = NCurPointer.random;
    if (f !== 2 && f !== 1 && OrandomPointer !== OCurPointer) {
      let temp = head;
      let ntemp = newListHead;
      while (temp !== OrandomPointer) {
        temp = temp.next;
        ntemp = ntemp.next;
      }
      NCurPointer.random = ntemp;
    }
    OCurPointer = OCurPointer.next;
    NCurPointer = NCurPointer.next;
  }
  return newListHead;
};
