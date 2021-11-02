// https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
let lowestCommonAncestor = function(root, p, q) {
  if (!root)
    return null

  if (root === p || root === q)
    return root

  let left = lowestCommonAncestor(root.left, p, q),
      right = lowestCommonAncestor(root.right, p, q)

  if (left && right) // 都不互为公共祖先
    return root
  if (left === null) // 左右其中一个实他们的公共祖先
    return right
  return left
};
