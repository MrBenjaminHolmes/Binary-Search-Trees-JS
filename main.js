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

testArray = [1, 4, 5, 8, 9, 12, 15, 16];

newTree = new Tree(testArray);

//newTree.delete(5);
console.log(newTree.find(9));
prettyPrint(newTree.root);
