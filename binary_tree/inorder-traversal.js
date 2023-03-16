module.exports = (node) => {
    const path = [];
    function inorderTraversal(node) {
        if(!node) {
            return;
        } else {
            node.left && inorderTraversal(node.left,path)
            path.push(node.val);
            node.right && inorderTraversal(node.right, path);
        }
    }
    inorderTraversal(node);
    return path;
}
