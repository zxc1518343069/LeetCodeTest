// https://leetcode.cn/problems/z1R5dt/
/**
 * Initialize your data structure here.
 */
// 暴力
// var MapSum = function () {
//   this.map = new Map();
// };

// MapSum.prototype.insert = function (key, val) {
//   this.map.set(key, val);
// };

// MapSum.prototype.sum = function (prefix) {
//   let res = 0;
//   for (const s of this.map.keys()) {
//     if (s.startsWith(prefix)) {
//       res += this.map.get(s);
//     }
//   }
//   return res;
// };
// let mapSum = new MapSum();

// 前缀树
class TrieNode {
  constructor() {
    this.val = 0;
    this.root = {};
  }
}
MapSum = function () {
  this.root = new TrieNode();
  this.map = new Map();
};

MapSum.prototype.insert = function (key, val) {
  const delta = val - (this.map.get(key) || 0);
  this.map.set(key, val);
  let node = this.root;

  for (const c of key) {
    if (!node[c]) {
      node[c] = new TrieNode();
    }
    node = node[c];
    node.val += delta;
  }
};
MapSum.prototype.sum = function (prefix) {
  let node = this.root;
  for (const c of prefix) {
    if (!node[c]) {
      return 0;
    }
    node = node[c];
  }
  return node.val;
};
let mapSum = new MapSum();
mapSum.insert("apple", 3);
console.log(mapSum.sum("ap")); // return 3 (apple = 3)
mapSum.insert("app", 2);
console.log(mapSum.sum("ap")); // return 5 (apple + app = 3 + 2 = 5)
