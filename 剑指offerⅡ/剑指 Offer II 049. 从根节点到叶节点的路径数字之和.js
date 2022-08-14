// https://leetcode.cn/problems/3Etpl5/
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
 * @return {number}
 */
// 题目不难 就是一个深度遍历 可以用字符串和 数字做都可以
var sumNumbers = function (root) {
  return dfs(root, 0);
};
const dfs = (root, prevSum) => {
  if (root === null) {
    return 0;
  }
  const sum = prevSum * 10 + root.val;
  if (root.left == null && root.right == null) {
    return sum;
  } else {
    return dfs(root.left, sum) + dfs(root.right, sum);
  }
};
