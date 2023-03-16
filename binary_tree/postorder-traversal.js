module.exports = (node) => {
    const path = [];
    function postorderTraversal(node) {
        if (!node) {
            return;
        } else {
            node.left && postorderTraversal(node.left, path);
            node.right && postorderTraversal(node.right, path);
            path.push(node.val);
        }
    }
    postorderTraversal(node)

    return path;
}


