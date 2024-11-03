const Tree = require("./BST");
const node = require("./BST");

testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

array = [...new Set(testArray)].sort((a, b) => a - b);
console.log(array);
