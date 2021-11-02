// https://leetcode-cn.com/problems/balanced-binary-tree/

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
 * @return {boolean}
 */
/*
* 二叉搜索树条件
* 1. 左右树是  二叉搜索树
* 2. 左右树的高度  差值不能超过1
* */
let isBalanced = function(root) {

  let returnType = (isb, height) => {
    return { isb, height }
  }
  let process = (head) => {
    if (root === null) return returnType(true, 0)
    let leftData = process(head.left),
        rightData = process(head.right),
        height = Math.max(leftData.height, rightData.height) + 1,
        isBalance = leftData.isb && rightData.isb
            && Math.abs(leftData.height - rightData.height) < 2
    return returnType(isBalance, height)
  }
  return process(root).isb
};
