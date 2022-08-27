// https://leetcode.cn/problems/QC3q1f/
/**
 * Initialize your data structure here.
 */
// 用于高效地存储和检索字符串数据集中的键
// 注意 差 search app 返回false
//     startWith  返回true
// 字典树
var Trie = function () {
  this.children = {};
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.children;
  for (const char of word) {
    if (!node[char]) {
      node[char] = {}; // 初始化
    }
    node = node[char];
  }
  // 此时 node 为最后一个字符的 对象
  node.isEnd = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  const node = this.searchPrefix(word);
  return node !== undefined && node.isEnd === true;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  return this.searchPrefix(prefix);
};
Trie.prototype.searchPrefix = function (prefix) {
  let node = this.children;
  console.log(this.children);
  for (const ch of prefix) {
    if (!node[ch]) {
      return false;
    }
    node = node[ch];
  }
  // 返回最后一个节点
  return node;
};

const tire = new Trie();
console.log(tire.insert("app"));
console.log(tire.startsWith("app"));
