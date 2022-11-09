class TrieNode {
  constructor(endOfWord) {
    this.children = {};
    this.endOfWord = endOfWord || false;
  }
}

let trieRoot;
var Trie = function () {
  trieRoot = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let curr = trieRoot;
  for (let i = 0; i < word.length; i++) {
    if (word[i] in curr.children) {
      curr = curr.children[word[i]];
      continue;
    }

    curr.children[word[i]] = new TrieNode();
    curr = curr.children[word[i]];
  }

  curr.endOfWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let curr = trieRoot;
  for (let i = 0; i < word.length; i++) {
    if (!(word[i] in curr.children)) return false;
    curr = curr.children[word[i]];
  }

  return curr.endOfWord;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let curr = trieRoot;
  for (let i = 0; i < prefix.length; i++) {
    if (!(prefix[i] in curr.children)) return false;
    curr = curr.children[prefix[i]];
  }

  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
