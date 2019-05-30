"use strict";

describe("BST", function() {
  let bst;
  beforeEach(function() {
    bst = new BinarySearchTree();
  });

  it("is initialized with null values", function() {
    expect(bst.node).toBe(null);
    expect(bst.right).toBe(null);
    expect(bst.left).toBe(null);
  });

  it("has an 'insert' method that adds string values in the correct order", function() {
    bst.insert("B");
    bst.insert("A");
    bst.insert("C");
    expect(bst.node.value).toBe("B");
    expect(bst.right.node.value).toBe("C");
    expect(bst.left.node.value).toBe("A");
  });

  it("the insert method can be dot-chained", function() {
    bst
      .insert("B")
      .insert("A")
      .insert("C");
    expect(bst.node.value).toBe("B");
    expect(bst.right.node.value).toBe("C");
    expect(bst.left.node.value).toBe("A");
  });

  it("each node contains a linked list", function() {
    bst.insert("B");
    bst.insert("A");
    bst.insert("C");
    expect(bst.node instanceof LinkedList).toBe(true);
    expect(bst.right.node instanceof LinkedList).toBe(true);
    expect(bst.left.node instanceof LinkedList).toBe(true);
  });

  it("each linked list's head should be a single capital letter", function() {
    bst
      .insert("B")
      .insert("A")
      .insert("C")
      .insert("Adam")
      .insert("Bart")
      .insert("Claire");
    expect(bst.node instanceof LinkedList).toBe(true);
    expect(bst.node.value).toBe("B");
    expect(bst.left.node instanceof LinkedList).toBe(true);
    expect(bst.left.node.value).toBe("A");
    expect(bst.right.node instanceof LinkedList).toBe(true);
    expect(bst.right.node.value).toBe("C");
    expect(bst.right.right).toBe(null);
    expect(bst.left.left).toBe(null);
  });

  it("new names should be added to the end of the linked list where the 'head' matches the first letter of the new name", function() {
    bst
      .insert("B")
      .insert("A")
      .insert("C")
      .insert("Brian")
      .insert("Brenda")
      .insert("Bob")
      .insert("Adam")
      .insert("Alice");

    //Grabbing all linked list values and adding them to a temp array
    const bArr = [];
    let curretNode = bst.node;
    while (curretNode) {
      bArr.push(curretNode.value);
      curretNode = curretNode.next;
    }
    const aArr = [];
    curretNode = bst.left.node;
    while (curretNode) {
      aArr.push(curretNode.value);
      curretNode = curretNode.next;
    }
    const cArr = [];
    curretNode = bst.right.node;
    while (curretNode) {
      cArr.push(curretNode.value);
      curretNode = curretNode.next;
    }
    expect(bArr).toEqual(["B", "Brian", "Brenda", "Bob"]);
    expect(aArr).toEqual(["A", "Adam", "Alice"]);
    expect(cArr).toEqual(["C"]);
  });

  it("if there is no mathcing node for the new names first letter a new node and linked list should be created to store it", function() {
    bst
      .insert("B")
      .insert("A")
      .insert("C")
      .insert("Brian")
      .insert("Brenda")
      .insert("Bob")
      .insert("Adam")
      .insert("Alice")
      .insert("Richard")
      .insert("Sally");

    //Grabbing all linked list values and adding them to a temp array
    const bArr = [];
    let curretNode = bst.node;
    while (curretNode) {
      bArr.push(curretNode.value);
      curretNode = curretNode.next;
    }
    const aArr = [];
    curretNode = bst.left.node;
    while (curretNode) {
      aArr.push(curretNode.value);
      curretNode = curretNode.next;
    }
    const cArr = [];
    curretNode = bst.right.node;
    while (curretNode) {
      cArr.push(curretNode.value);
      curretNode = curretNode.next;
    }
    const rArr = [];
    curretNode = bst.right.right.node;
    while (curretNode) {
      rArr.push(curretNode.value);
      curretNode = curretNode.next;
    }
    const sArr = [];
    curretNode = bst.right.right.right.node;
    while (curretNode) {
      sArr.push(curretNode.value);
      curretNode = curretNode.next;
    }
    expect(bArr).toEqual(["B", "Brian", "Brenda", "Bob"]);
    expect(aArr).toEqual(["A", "Adam", "Alice"]);
    expect(cArr).toEqual(["C"]);
    expect(rArr).toEqual(["R", "Richard"]);
    expect(sArr).toEqual(["S", "Sally"]);
  });

  it("has a 'depthFirstSearch' method that returns an array with all the tree's values", function() {
    bst
      .insert("B")
      .insert("A")
      .insert("C")
      .insert("Brian")
      .insert("Brenda")
      .insert("Bob")
      .insert("Adam")
      .insert("Alice")
      .insert("Richard")
      .insert("Sally");

    expect(bst.depthFirstSearch()).toEqual([
      "A",
      "Adam",
      "Alice",
      "B",
      "Brian",
      "Brenda",
      "Bob",
      "C",
      "R",
      "Richard",
      "S",
      "Sally"
    ]);
  });

  it("has a 'search' method that returns true or false for if a name exists in the tree", function() {
    bst
      .insert("B")
      .insert("A")
      .insert("C")
      .insert("Brian")
      .insert("Brenda")
      .insert("Bob")
      .insert("Adam")
      .insert("Alice")
      .insert("Richard")
      .insert("Sally");

    expect(bst.search("Richard")).toBe(true);
    expect(bst.search("Bob")).toBe(true);
    expect(bst.search("Winston")).toBe(false);
  });
});
