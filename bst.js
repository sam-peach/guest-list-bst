class BinarySearchTree {
  constructor() {
    //your code here
  }

  insert() {
    //your code here
  }

  search() {
    //your code here
  }

  depthFirstSearch() {
    //your code here
  }
}

//The LinkedList class is already setup for you
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  insert(string) {
    if (!this.next) this.next = new LinkedList(string);
    else this.next.insert(string);
  }
}
