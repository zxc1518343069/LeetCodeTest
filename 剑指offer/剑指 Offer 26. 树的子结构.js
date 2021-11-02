// https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) { // 走左右节点。解这判断是否是同一颗树
  if (!A || !B)
    return false
  return isSameTree(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
};
const isSameTree = function(A, B) { // 判断是否是一个相同的树
  if (!B)
    return true
  if (!A) // 这时候B一定不为空
    return false
  if (A.val !== B.val) return false
  return isSameTree(A.left, B.left) && isSameTree(A.right, B.right)
};
