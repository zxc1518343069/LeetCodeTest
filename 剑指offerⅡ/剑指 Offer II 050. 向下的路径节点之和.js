//https://leetcode.cn/problems/6eUYwP/
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
 * @param {number} targetSum
 * @return {number}
 */
// 这个也简单 就是把每个节点都进行 dfs 即可
var pathSum = function (root, targetSum) {
  if (root == null) {
    return 0;
  }

  let ret = rootSum(root, targetSum);
  ret += pathSum(root.left, targetSum);
  ret += pathSum(root.right, targetSum);
  return ret;
};
const rootSum = (root, targetSum) => {
  let ret = 0;

  if (root == null) {
    return 0;
  }
  const val = root.val;
  if (val === targetSum) {
    ret++;
  }

  ret += rootSum(root.left, targetSum - val);
  ret += rootSum(root.right, targetSum - val);
  return ret;
};
// 前缀和 减少计算 但是目前理解有点吃力
// https://leetcode.cn/problems/6eUYwP/solution/xiang-xia-de-lu-jing-jie-dian-zhi-he-by-a1iyy/
