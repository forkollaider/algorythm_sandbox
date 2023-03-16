module.exports = (node) => {
    const path = [];
    function preorderTraversal(node) {
        if (!node) {
            return;
        } else {
            path.push(node.val);
            node.left && preorderTraversal(node.left, path);
            node.right && preorderTraversal(node.right, path);
        }
    }
    preorderTraversal(node)

    return path;
}


