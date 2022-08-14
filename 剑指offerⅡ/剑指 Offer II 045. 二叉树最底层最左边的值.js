// https://leetcode.cn/problems/LwUNpT/
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
// dfs 注意 if的判断条件 第一次走到if 的时候 应该是 左子树的 最后一层的叶子节点
var findBottomLeftValue = function (root) {
  let curHeight = 0,
    curVal;

  const dfs = (root, height) => {
    if (!root) {
      return;
    }
    height++;
    dfs(root.left, height);
    dfs(root.right, height);
    if (height > curHeight) {
      curHeight = height;
      curVal = root.val;
    }
  };

  dfs(root, 0);
  return curVal;
};
