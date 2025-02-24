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

  delete(value, current = this.root, parent = null) {
    if (current === null) {
      return null;
    }

    if (value < current.data) {
      current.left = this.delete(value, current.left, current);
    } else if (value > current.data) {
      current.right = this.delete(value, current.right, current);
    } else {
      if (current.left === null && current.right === null) {
        // Case 1: No children (leaf node)
        return null;
      } else if (current.left === null) {
        // Case 2: One child (right)
        return current.right;
      } else if (current.right === null) {
        // Case 2: One child (left)
        return current.left;
      } else {
        // Case 3: Two children
        let successorNode = current.right;
        while (successorNode.left !== null) {
          successorNode = successorNode.left;
        }
        current.data = successorNode.data;
        current.right = this.delete(successorNode.data, current.right);
      }
    }
    return current;
  }

  find(data, node = this.root) {
    if (node === null) {
      return null;
    }
    if (data === node.data) {
      return node;
    }
    if (data < node.data) {
      return this.find(data, node.left);
    }
    if (data > node.data) {
      return this.find(data, node.right);
    }
  }
  levelOrder(callback) {
    if (typeof callback !== "function") {
      throw new Error("A callback function is required.");
    }

    let queue = [];
    console.log("BF Level Order::");
    if (this.root) queue.push(this.root);

    while (queue.length > 0) {
      let currentNode = queue.shift();
      callback(currentNode);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }
}

module.exports = Tree;
