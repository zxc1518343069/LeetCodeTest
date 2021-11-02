// https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) return true
  const dfs = (left, right) => {
    if (!left && !right) return true  // 左右子树同时为空    则为镜像
    if (!left || !right) return false // 左右子树有一个为空  则不为镜像
    if (left.val !== right.val) return false // 左右子树同时存在 但值不同 也不为镜像
    return dfs(left.left, right.right) && dfs(left.right, right.left)
  }
  return dfs(root.left, root.right)
};
