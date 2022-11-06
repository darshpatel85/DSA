class Node {
  constructor(ele) {
    this.ele = ele;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(ele) {
    let node = new Node(ele);

    let current = this.head;

    if (current == null) {
      this.head = node;
    } else {
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
  }

  print() {
    let current = this.head;
    let arr = [];
    while (current !== null) {
      arr.push(current.ele);
      current = current.next;
    }
    console.log("====================================");
    console.log(arr.join(" -> "));
  }
  remove(ele) {
    let current = this.head;
    let prev = current;
    if (current == null) {
      console.log("Nothing to remove");
    } else {
      if (current.ele === ele) {
        this.head = current.next;
        this.size--;
      }
      while (current.next !== null) {
        if (current.ele === ele) {
          prev.next = current.next;
          this.size--;
          return;
        }
        prev = current;
        current = current.next;
      }
      console.log("Not found");
    }
  }

  insertAt(ele, pos) {
    // let newNode = new Node(ele);

    // let pointer = this.head;
    // let prev = pointer;
    // let currentPos = 0;
    // if(pos === 0){
    //   newNode.next = pointer;
    //   this.head = newNode;
    //   return;
    // }
    // while (pointer !== null && currentPos <= pos) {
    //   if (pos === currentPos) {
    //     newNode.next = pointer;
    //     prev.next = newNode;
    //     return;
    //   }
    //   prev = pointer;
    //   pointer = pointer.next;
    //   currentPos++;
    // }
    // console.log("out of range");
    // return;
    let newNode = new Node(ele);

    let pointer = this.head;
    let currentPos = 0;
    if (pos === 0) {
      newNode.next = pointer;
      this.head = newNode;
      return;
    }
    while (pointer !== null && (currentPos+1) <= pos) {
      if (pos === (currentPos+1)) {
        newNode.next = pointer.next;
        pointer.next = newNode;
        console.log(pointer);
        return;
      }
      pointer = pointer.next;
      currentPos++;
    }
    console.log("out of range");
    return;
  }

  removeAt(pos) {
      if(pos === 0){
        this.head = this.head.next;
        return;
      }
      let pointer = this.head;
      let currentPos = 0
      while (pointer !== null && (currentPos+1) <= pos) {
        if((currentPos+1) === pos){
          pointer.next = pointer.next.next;
          return;
        }
        pointer = pointer.next;
        currentPos++;
      }
      console.log("out of range");
      return;
  }
}

let l = new LinkedList();
l.add(5);
l.add(4);
l.add(3);
l.print();
l.remove(4);
l.add(3);
l.remove(5);
l.print();
l.insertAt(5, 1);
l.print();
l.insertAt(4, 0);
l.insertAt(2, 5);
l.print();
l.removeAt(1);
l.removeAt(2);
l.removeAt(0);
l.removeAt(3);
l.print()
