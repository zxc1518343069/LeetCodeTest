// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
/*
二叉搜索树的中序遍历是由小到大的有序数列  只需要  反中序遍历即可
 */
// 中序遍历拿到值就可
var kthLargest = function (root, k) {
  const arr = [];
  const unInOrder = (node) => {
    if (node) {
      unInOrder(node.right);
      arr.push(node.val);
      unInOrder(node.left);
    }
  };
  unInOrder(root);
  return arr[k - 1];
};
