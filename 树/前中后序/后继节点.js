/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.parent = null;
 * }
 */

/*
* 当有指向他父类节点的指针时
*，可以优化成O（K）  K即两个节点之间的举例
*
* 两个条件
* 1. 如果这个节点有右节点的话，一定是他右树上的最左节点
* 2.  如果没有右节点的话。 需要找他 父节点 且 自己是父节点的右节点
*
* */


let getSuccessorNode = (root) => {
  let getLeftMost = (root) => {
    if (!root)
      return null
    while (root.left)
      root = root.left
    return root
  }

  if (root.right)
    return getLeftMost(root.right)
  else {
    let parent = root.parent
    while (parent && parent.left !== root) {
      root = root.parent
      parent = parent.parent
    }
    return parent
  }

}
