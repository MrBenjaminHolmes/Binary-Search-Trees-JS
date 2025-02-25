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
  inOrder(callback) {
    if (typeof callback !== "function") {
      throw new Error("A callback function is required.");
    }

    let queue = [];
    let current = this.root;

    while (queue.length > 0 || current !== null) {
      while (current !== null) {
        queue.push(current);
        current = current.left;
      }

      current = queue.pop();
      callback(current);

      current = current.right;
    }
  }
  preOrder(callback) {
    if (typeof callback !== "function") {
      throw new Error("A callback function is required.");
    }
    let queue = [];
    let current = this.root;

    queue.push(current);

    while (queue.length > 0) {
      let current = queue.pop();
      callback(current.data);

      if (current.right !== null) {
        queue.push(current.right);
      }
      if (current.left !== null) {
        queue.push(current.left);
      }
    }
  }
  postOrder(callback) {
    //LEFT RIGHT ROOT
    if (typeof callback !== "function") {
      throw new Error("A callback function is required.");
    }
    let queue1 = [];
    let queue2 = [];
    let current = this.root;
    queue1.push(current);
    while (queue1.length > 0) {
      let current = queue1.pop();
      queue2.push(current);
      if (current.left) queue1.push(current.left);
      if (current.right) queue1.push(current.right);
    }
    while (queue2.length > 0) {
      callback(queue2.pop().data);
    }
  }
}

module.exports = Tree;
