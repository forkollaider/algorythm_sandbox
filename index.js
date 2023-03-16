const BinaryTree = require('./binary_tree/tree')
const inorderTraversal = require('./binary_tree/inorder-traversal');
const preorderTraversal = require('./binary_tree/preorder-traversal');
const postorderTraversal = require('./binary_tree/postorder-traversal');

const tree = new BinaryTree([25,15,50,10,22,35,70,4,12,18,24,31,44,66,90]);



console.log(inorderTraversal(tree.root));


// console.log(preorderTraversal(tree.root));
console.log(postorderTraversal(tree.root));
