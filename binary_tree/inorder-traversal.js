module.exports = function inorderTraversal(node, path) {
    if(!node) {
        return;
    } else {
        if(node.left) {
            inorderTraversal(node.left,path)
        }
        path.push(node.val);
        if(node.right) {
            inorderTraversal(node.right, path)
        }
    }
}
