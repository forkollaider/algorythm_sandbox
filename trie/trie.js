const Trie = function () {
    this.root = new TrieNode();
};

const TrieNode = function(val, isKey,children) {
    this.val = val === undefined ? null : val;
    this.children = children === undefined ? {} : children;
    this.isKey = !!isKey;
}

Trie.prototype.insert = function(word) {
    let current = this.root;
    for(const char of word){
        if(!current.children[char]) {
            current.children[char] = new TrieNode(char);
        }
        current = current.children[char];
    }
    current.isKey = true;
};

Trie.prototype.search = function(word) {
    let current = this.root;

    for(const char of word) {
        if(!current.children[char]) {
            return false;
        } else {
            current = current.children[char];
        }
    }
    return current.isKey;
};

Trie.prototype.startsWith = function(prefix) {
    let current = this.root

    for(const char of prefix) {
        if(!current.children[char]) {
            return false;
        } else {
            current = current.children[char];
        }
    }
    return true;
};
