//https://leetcode.cn/problems/pOCWxh/
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
 * @return {TreeNode}
 */
// 注意 剪除该二叉树中 所有节点的值为 0 的子树 其他的都挺简单
// 即 子树节点值都为0  注意时候的顺序
var pruneTree = function (root) {
  if (!root) return;

  root.left = pruneTree(roor.left);
  root.right = pruneTree(root.right);
  if (!root.left && !root.right && root.val === 0) {
    return null;
  }
  return root;
};
