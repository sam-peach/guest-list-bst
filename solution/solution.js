class BinarySearchTree {
  constructor(ll, left, right) {
    this.node = ll || null;
    this.left = left || null;
    this.right = right || null;
  }

  insert(value) {
    if (value.length === 1) {
      if (!this.node) {
        this.node = new LinkedList(value);
      } else {
        const direction = value < this.node.value ? "left" : "right";
        if (this[direction]) this[direction].insert(value);
        else this[direction] = new BinarySearchTree(new LinkedList(value));
      }
    } else {
      if (value[0] === this.node.value) {
        let currentLLNode = this.node;
        while (currentLLNode.next) {
          currentLLNode = currentLLNode.next;
        }
        currentLLNode.next = new LinkedList(value);
      } else {
        const direction = value < this.node.value ? "left" : "right";
        if (this[direction]) this[direction].insert(value);
        else {
          this[direction] = new BinarySearchTree(new LinkedList(value[0]));
          this[direction].node.next = new LinkedList(value);
        }
      }
    }
    return this;
  }

  search(name) {
    if (name[0] === this.node.value) {
      let currentLL = this.node.next;
      while (currentLL) {
        if (name === currentLL.value) return true;
        else currentLL = currentLL.next;
      }
    } else {
      const direction = name[0] < this.node.value ? "left" : "right";
      if (this[direction]) return this[direction].search(name);
      else return false;
    }
  }

  depthFirstSearch(arr = []) {
    if (this.left) this.left.depthFirstSearch(arr);
    let currentNode = this.node;
    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    if (this.right) this.right.depthFirstSearch(arr);
    return arr;
  }
}

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
