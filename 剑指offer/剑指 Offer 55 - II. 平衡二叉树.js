// https://leetcode-cn.com/problems/ping-heng-er-cha-shu-lcof/
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
/*
只考虑当前节点 与下一层的关系
平衡二叉树的定义是：二叉树的每个节点的左右子树的高度差的绝对值不超过 1
 */
// todo: 感觉没理解好。回来自己再做一次
var isBalanced = function (root) {
  let returnType = (isb, height) => ({ isb, height });

  const process = (node) => {
    if (node === null) return returnType(true, 0);
    let left = process(node.left),
      right = process(node.right),
      height = Math.max(left.height, right.height) + 1,
      isb = left.isb && right.isb && Math.abs(left.height - right.height) < 2;
    return returnType(isb, height);
  };
  process(root);
  return process(root).isb;
};

//
isBalanced = function (root) {
  let returnType = (isb, height) => ({ isb, height });

  const process = (node) => {
    // 判断到叶子节点的时候
    if (node === null) return returnType(true, 0);

    // 递归 只需要考虑当前和下一层关系
    const left = process(node.left);
    const right = process(node.right);
    const height = Math.max(left.height, right.height) + 1;
    const isB =
      left.isb && right.isb && Math.abs(left.height - right.height) < 2;

    return returnType(isB, height);
  };
  process(root);
  return process(root).isb;
};
