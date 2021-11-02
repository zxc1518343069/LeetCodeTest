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

console.log(verifyPostorder([1,2,5,10,6,9,4,3]))
let verifyPostorder2 = function(nums) {
  if (nums.length <= 1) return true


  // 因为是 后序遍历  左 右 中   所以最后一位是 root
  const root = nums[nums.length - 1]
  let i = 0

  // 找出第一个大于root 的节点 就是 右子树第一个节点
  for (; i < nums.length-1; i++)
    if (nums[i] > root)
      break


  const left = nums.splice(0, i)
  const right = nums.splice(i, nums.length - 1)

  const res = left.every(item => item < root) && right.every(item => item >= root)

  if (res) {
    return verifyPostorder2(left) && verifyPostorder2(right);
  } else {
    return false
  }
}
