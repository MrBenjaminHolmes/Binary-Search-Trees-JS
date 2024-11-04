class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    const sortedArray = [...new Set(array)].sort((a, b) => a - b);
    this.root = this.buildTree(sortedArray);
  }

  buildTree(sortedArray) {
    if (sortedArray.length === 0) {
      return null;
    }
    const midPoint = Math.floor(sortedArray.length / 2);

    const rootNode = new Node(sortedArray[midPoint]);

    const leftSubTree = sortedArray.slice(0, midPoint);
    const rightSubTree = sortedArray.slice(midPoint + 1);
    rootNode.right = this.buildTree(rightSubTree);
    rootNode.left = this.buildTree(leftSubTree);
    return rootNode;
  }

  insert(value, root = this.root) {
    if (root === null) {
      this.root = new Node(value);
      return;
    }

    if (value < root.data) {
      if (root.left === null) {
        root.left = new Node(value);
      } else {
        this.insert(value, root.left);
      }
    } else {
      if (root.right === null) {
        root.right = new Node(value);
      } else {
        this.insert(value, root.right);
      }
    }
  }
}

module.exports = Tree;
