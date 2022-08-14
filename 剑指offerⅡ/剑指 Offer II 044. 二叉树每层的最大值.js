// https://leetcode.cn/problems/hPov7L/
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
 * @return {number[]}
 */
// bfs 简单题目
var largestValues = function (root) {
  if (!root) {
    return [];
  }
  const res = [];
  const queue = [root];
  while (queue.length) {
    let len = queue.length;
    let maxVal = -Number.MAX_VALUE;
    while (len > 0) {
      len--;
      const t = queue.shift();
      maxVal = Math.max(maxVal, t.val);
      if (t.left) {
        queue.push(t.left);
      }
      if (t.right) {
        queue.push(t.right);
      }
    }
    res.push(maxVal);
  }
  return res;
};
