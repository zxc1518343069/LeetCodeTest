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

console.log(verifyPostorder([1, 2, 5, 10, 6, 9, 4, 3]))
let verifyPostorder2 = function(nums) {
  if (nums.length <= 1) return true


  // 因为是 后序遍历  左 右 中   所以最后一位是 root
  const root = nums[nums.length - 1]
  let i = 0

  // 找出第一个大于root 的节点 就是 右子树第一个节点
  for (; i < nums.length - 1; i++)
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


// 二叉查找树（Binary Search Tree），（又：二叉搜索树，二叉排序树）
// 它或者是一棵空树，或者是具有下列性质的二叉树： 若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值；
// 若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值；
// 它的左、右子树也分别为二叉排序树
// 2022-7-6
//如果先收集中间节点，再左节点，再右节点，就是前序遍历；
//如果先收集处理左节点，再中间节点，再右节点，就是中序遍历；
// 如果先处理左节点，然后右节点，最后中间节点，就是后序遍历
verifyPostorder = function(postorder) {
  if (postorder.length <= 1) return true

  let len = postorder.length
  const rootNode = postorder[len - 1] // 后续便利 获取最后一个阶级点为 根节点
  let i = 0;

  //根据二叉搜索树的性质。找到第一个比 根节点大的数
  for (; i < len - 1; i++) {
    if (postorder[i] > rootNode) break
  }

  // 获取到 左右树  接下来判断   左树是否都比rootNode小，右树是否都比rootNode大
  const leftTree = postorder.slice(0, i)
  const rightTree = postorder.slice(i, len - 1)
  const res = leftTree.every((item) => item < rootNode) && rightTree.every((item) => item >= rootNode);

  //根据结果  如果满足，则继续 递归。 判断子树是不是都是二叉搜索树
  if (res){
    return verifyPostorder(leftTree) && verifyPostorder(rightTree);

  }else{
    return false
  }

};
