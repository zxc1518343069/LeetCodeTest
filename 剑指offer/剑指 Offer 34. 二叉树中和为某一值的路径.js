// https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/

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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function(root, target) {
  const res = [], tmp = []
  if (!root) return []
  const dfs = (node, sum) => {
    if (!node) return;
    tmp.push(node.val)
    sum += node.val
    // 结束条件
    if (!node.left && !node.right && sum === target)
      return res.push([...tmp])
    else { // 循环条件
      dfs(node.left, sum)
      dfs(node.right, sum)
    }
    sum -= node.val
    tmp.pop()
  }
  dfs(root, 0)
  return res
};
