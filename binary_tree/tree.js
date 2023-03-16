const TreeNode = require('./node')

module.exports =  class BinaryTree {
    constructor(values) {
        values.forEach(v => this.insert(v));
    }
    insert(value) {
        if(!this.root) {
            this.root = new TreeNode(value);
        } else {
            let prev = null;
            let cur = this.root;
            while(cur) {
                prev = cur;
                if(value === cur.val) {
                    throw new Error(`value ${value} already present in the tree`);
                }
                cur = value < cur.val ? cur.left : cur.right;
            }
            prev[value < prev.val ? 'left' : 'right'] = new TreeNode(value);
        }
    }
}
