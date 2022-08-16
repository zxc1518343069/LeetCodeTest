// https://leetcode.cn/problems/kTOapQ/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
// 建树 铺平
var BSTIterator = function (root) {
  this.idx = 0;
  this.arr = [];
  this.inorderTraversal(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  return this.arr[this.idx++];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.idx < this.arr.length;
};
// 建树
BSTIterator.prototype.inorderTraversal = function (root) {
  if (!root) return;
  this.inorderTraversal(root.left);
  this.arr.push(root.val);
  this.inorderTraversal(root.right);
};

// 迭代  思路 用一个stack维护 root 中 节点关系
// 参考https://leetcode.cn/problems/kTOapQ/solution/er-cha-sou-suo-shu-die-dai-qi-by-leetcod-hwfe/
