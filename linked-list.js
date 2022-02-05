/**
 * Node: node for a singly linked list.
 *
 * @format
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */
  // Appends a new node with value val to the tail. Returns undefined.
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length = this.length + 1;
    return undefined;
  }

  /** unshift(val): add new value to start of list. */
  // Add a new node with value val to the head. Returns undefined.
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length = this.length + 1;
    return undefined;
  }

  /** pop(): return & remove last item. */
  // Remove & return tail value. Throws error if list is empty.
  pop() {
    // load return final value
    let lastNodeVal = this.tail.val;

    // list empty? throw error
    if (!this.head) throw new Error("empty!");
    // list has 1 value?
    else if (!this.head.next) {
      this.head = null;
      this.tail = null;
    }
    // list has more than 1 value?
    else {
      let currNode = this.head;
      while (currNode) {
        if (currNode.next == this.tail) {
          currNode.next = null;
          this.tail = currNode;
        }
        currNode = currNode.next;
      }
    }

    this.length = this.length - 1;
    return lastNodeVal;
  }

  /** shift(): return & remove first item. */
  // Remove & return head value. Throws error if list is empty.
  shift() {
    const firstItem = this.head.val;
    if (!this.head) throw new Error("empty!");
    else if (!this.head.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.length = this.length - 1;
    return firstItem;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currNode = this.head;
    for (let i = 0; i < idx; i++) {
      currNode = currNode.next;
    }
    return currNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currNode = this.head;
    for (let i = 0; i < idx; i++) {
      currNode = currNode.next;
    }
    currNode.val = val;
    return currNode.val;
  }

  /** insertAt(idx, val): add node w/val before idx. */
  // Insert a new node at position idx with value val. Throws error if index is invalid. Returns undefined.
  insertAt(idx, val) {
    if (!this.head) {
      let newNode = new Node(val);
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
      return undefined;
    }

    let currNode = this.head;
    for (let i = 0; i < idx - 1; i++) {
      if (!currNode.next) {
        throw new Error("Index is too big.");
      }
      currNode = currNode.next;
    }
    let newNode = new Node(val);
    newNode.next = currNode.next;
    currNode.next = newNode;
    this.length = this.length + 1;
    if (currNode == this.tail) {
      this.tail = newNode;
    }
    return undefined;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let returnVal;
    if (!this.head) {
      throw new Error("nothing here.");
    } else if (this.length === 1) {
      returnVal = this.head.val;
      this.head = null;
      this.tail = null;
    } else {
      let currNode = this.head;
      for (let i = 0; i < idx - 1; i++) {
        currNode = currNode.next;
      }
      returnVal = currNode.next.val;
      currNode.next = currNode.next.next;
    }
    this.length = this.length - 1;
    return returnVal;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (!this.head) {
      return 0;
    }
    let sum = 0;
    let numValues = 0;
    let currNode = this.head;
    while (currNode) {
      sum = sum + currNode.val;
      numValues = numValues + 1;
      currNode = currNode.next;
    }
    return sum / numValues;
  }
}

module.exports = LinkedList;
