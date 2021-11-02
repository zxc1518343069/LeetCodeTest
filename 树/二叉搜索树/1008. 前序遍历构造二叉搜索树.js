// https://leetcode-cn.com/problems/construct-binary-search-tree-from-preorder-traversal/

/*
*
* 二叉搜索树是二叉树的一种，其每个节点都满足以下规则，对于node.left的任何后代值总 < node.val，
* 而 node.right 的任何后代，值总 > node.val。
* 此外，前序遍历首先显示节点node 的值，然后遍历 node.left，接着遍历 node.right。
* */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/* 递归版本*/
let bstFromPreorder = function(preorder) {
  /* 递归终止条件*/
  if (!preorder.length)
    return null

  let rootVal = preorder.shift()
  let rootNode = new TreeNode()
  rootNode.left = bstFromPreorder(preorder.filter(item => item < rootVal))
  rootNode.right = bstFromPreorder(preorder.filter(item => item > rootVal))
  return rootNode
};

