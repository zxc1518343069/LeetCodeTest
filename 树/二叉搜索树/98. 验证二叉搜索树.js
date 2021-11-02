// https://leetcode-cn.com/problems/validate-binary-search-tree/

/*
* 二叉搜索树
* 左树都比根节点小
* 右树都比根节点大
* */

/* 递归  简写版本 */
let help = (root, min, max) => {
  if (root === null) {
    return true
  }
  if (root.value <= min || root.value >= max) {
    return false
  }
  return help(root.left, min, root.val) && help(root.right, root.val, max)
}
let isValidBST = function(root) {
  return help(root, -Infinity, Infinity)
};


/* 中序遍历   一定事递增的 如果不是递增 不是二叉搜索树*/
let preVal = -Infinity
let isBst = (root) => {
  if (!root) return true
  let is = isBst(root.left)
  if (!is)
    return false
  if (root.val <= preVal) {
    return false
  } else {
    preVal = root.val
  }
  return isBst(root.right)
}

/* 递归 类似二叉树DP版本*/
let isBST = (root) => {

  let returnType = (min, max, isB) => ({ min, max, isB })

  let process = (root) => {
    if (!root) return null
    let min = root.val,
        max = root.val,
        isB = true

    let leftData = process(root.left)
    let rightData = process(root.right)

    if (leftData) {
      min = Math.min(min, leftData.min)
      max = Math.max(max, leftData.max)
    }
    if (rightData) {
      min = Math.min(min, rightData.min)
      max = Math.max(max, rightData.max)
    }

    if (leftData && (!leftData.isB || leftData.max >= root.val))
      isB = false
    if (rightData && (!rightData.isB || root.val >= rightData.min))
      isB = false
    return returnType(min, max, isB)
  }
  return process(root).isB
}
