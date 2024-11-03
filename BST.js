class node {
  constructor() {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

class Tree {
  constructor(array) {
    const sortedArray = [...new Set(array)].sort((a, b) => a - b);
    this.root = this.buildTree(sortedArray);
  }

  buildTree(array) {}
}
module.exports = Tree;
