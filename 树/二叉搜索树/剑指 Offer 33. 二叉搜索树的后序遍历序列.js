// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/
/**
 * @param {number[]} postorder
 * @return {boolean}
 */
let verifyPostorder = function(postorder) {
  if (postorder.length <= 1) return true

  let len = postorder.length

  // 因为是后序遍历 所以最后一个是根节点
  const root = postorder[len - 1]
  let i = 0

  // 找出 第一个比 根节点大的出
  // 如果是 二叉搜索树的后序遍历。则从i 之后 > root
  // 反之   则不是 二叉搜素树的后序遍历
  for (; i < len - 1; i++)
    if (postorder[i] > root)
      break

  const leftVal = postorder.slice(0, i);
  const rightVal = postorder.slice(i, len - 1)

  // 判断 是否存在比 > root 的数
  const res = leftVal.every((item) => item < root) && rightVal.every((item) => item >= root);
  if (res) {
    return verifyPostorder(leftVal) && verifyPostorder(rightVal);
  } else {
    return false
  }
};
