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

function printNode(node) {
  console.log(node.data);
}
testArray = [1, 2, 3, 4, 5, 6];

newTree = new Tree(testArray);
prettyPrint(newTree.root);
newTree.levelOrder(printNode);
