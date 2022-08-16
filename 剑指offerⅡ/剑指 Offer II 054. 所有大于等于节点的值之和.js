// https://leetcode.cn/problems/w6cpku/
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
// 二叉搜索树, 左子树左叶子节点最小  右子树右叶子节点最大
// 顺序 先算最右侧 再算中间  再算左边
var convertBST = function (root) {
  let value = 0;
  let dfs = (root) => {
    if (!root) return;
    // 找到当前子树最后最右侧节点
    if (root.right) dfs(root.right);
    value += root.val; // 运算赋值
    root.val = value;
    if (root.left) dfs(root.left);
  };
  dfs(root);
  return root;
};
