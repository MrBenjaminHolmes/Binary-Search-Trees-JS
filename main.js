const Tree = require("./BST");
const node = require("./BST");

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

function generateRandomArray(size, maxValue = 100) {
  return Array.from(
    new Set(
      Array.from({ length: size }, () => Math.floor(Math.random() * maxValue))
    )
  );
}

function printNode(node) {
  console.log(node);
}

newTree = new Tree(generateRandomArray(6, (maxValue = 100)));
prettyPrint(newTree.root);
console.log("Is Balanced: " + newTree.isBalanced());
console.log("------------------------");
console.log("Level Order Traversal:");
newTree.levelOrder(printNode);
console.log("------------------------");
console.log("In Order Traversal:");
newTree.inOrder(printNode);
console.log("------------------------");
console.log("Pre Order Traversal:");
newTree.preOrder(printNode);
console.log("------------------------");
console.log("Post Order Traversal:");
newTree.postOrder(printNode);
console.log("------------------------");

newTree.insert(300);
newTree.insert(400);
newTree.insert(500);

console.log(newTree.isBalanced());
newTree.rebalance();
console.log("Rebalencing...");
console.log(newTree.isBalanced());

prettyPrint(newTree.root);

console.log("------------------------");
console.log("Level Order Traversal:");
newTree.levelOrder(printNode);
console.log("------------------------");
console.log("In Order Traversal:");
newTree.inOrder(printNode);
console.log("------------------------");
console.log("Pre Order Traversal:");
newTree.preOrder(printNode);
console.log("------------------------");
console.log("Post Order Traversal:");
newTree.postOrder(printNode);
console.log("------------------------");
