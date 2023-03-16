const BinaryTree = require('./binary_tree/tree')
const inorderTraversal = require('./binary_tree/inorder-traversal');

const tree = new BinaryTree([25,15,50,10,22,35,70,4,12,18,24,31,44,66,90]);

const path = [];
inorderTraversal(tree.root, path);

console.log(path);
