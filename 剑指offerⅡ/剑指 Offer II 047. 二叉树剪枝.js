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
// 注意 剪除该二叉树中所有节点的值为 0 的 叶子节点 其他的都挺简单
var pruneTree = function (root) {
  if (!root) return;
  if (!root.left && !root.right && root.val === 0) {
    return null;
  }
  root.left = pruneTree(roor.left);
  root.right = pruneTree(root.right);

  return root;
};
