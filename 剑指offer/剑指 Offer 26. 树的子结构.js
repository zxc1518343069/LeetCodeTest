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
var isSameTree = function(A, B) { // 判断是否是一个相同的树
  if (!B)
    return true
  if (!A) // 这时候B一定不为空
    return false
  if (A.val !== B.val) return false
  return isSameTree(A.left, B.left) && isSameTree(A.right, B.right)
};


// 2022-7-06 第二遍


isSubStructure = function(A, B) {
  if (!A || !B) return false
  return isSameTree(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
};
isSameTree = (A, B) => {
  // 第一次 AB 一定存在，但是第N次不一定
  if (!B) { // 走到这里。证明B树已经便利完成 返回true
    return true
  }
  if (!A) return false // A走到这里 证明已经匹配不成功了了。B 一定不为空

  return isSameTree(A.left, B.left) && isSameTree(A.right, B.right)
}
