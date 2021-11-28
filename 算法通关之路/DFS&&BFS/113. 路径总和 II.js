// https://leetcode-cn.com/problems/path-sum-ii/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  var res = []
  let dfs = (node, total, nums) => {
    total += node.val
    nums.push(node.val)
    if (node.left || node.right) {
      node.left && dfs(node.left, total, [...nums])
      node.right && dfs(node.right, total, [...nums])
    } else if (total === sum) {
      res.push(nums)
    }
  }
  return root && dfs(root, 0, []) || res
};
