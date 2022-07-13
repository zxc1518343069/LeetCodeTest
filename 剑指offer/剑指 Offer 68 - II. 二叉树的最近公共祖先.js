// https://leetcode-cn.com/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof/
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
let lowestCommonAncestor = function (root, p, q) {
  if (!root) return null;
  // 一个节点也可以是它自己的祖先
  if (root === p || root === q) return root;
  // 往下开始找左右节点
  let left = lowestCommonAncestor(root.left, p, q),
    right = lowestCommonAncestor(root.right, p, q);

  // 如果左右节点同时存在 就返回 自身
  if (left && right) return root;
  // 返回两者一个
  if (left === null) return right;
  return left;
};
