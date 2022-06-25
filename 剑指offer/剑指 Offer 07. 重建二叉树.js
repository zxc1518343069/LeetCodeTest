/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
/*
  先序遍历    中左右
  中序遍历    左中右
  后序遍历    左右中
 */
//前序遍历 preorder = [3,9,20,15,7]
// 中序遍历 inorder = [9,3,15,20,7]
var buildTree = function(preorder, inorder) {
  let p = 0, i = 0 // p 记录 先序遍历的位置  i 记录中序遍历的位置
  let build = (stop) => {
    if (inorder[i] !== stop) {
      let root = new TreeNode(preorder[p++])
      root.left = build(root.val)
      i++
      root.right = build(stop)
      return root
    }
    return null
  }
  return build()
};
function a(preorder, inorder) {
  let a, b= 0

  let build = (stop) =>{
    if (stop !== inorder[b]){
      let root =  new TreeNode(preorder[a++]) // 找到根节点
      root.left = build(root.val)
      b++
      root.right = build(stop)
      return root
    }
    return null

  }
  return build ()
}

// 2021-07-11 重刷联系手感
var buildTree3 = function(preorder, inorder) {
  // 中序遍历第一个是 根节点 根据根节点在前序遍历的位置建立树
  let p = 0, i = 0 // p 记录 先序遍历的位置  i 记录中序遍历的位置
  let build = (stop) => {
    if (inorder[i] !== stop) {
      let root = new TreeNode(preorder[p++])
      root.left = build(root.val)// 左节点都在根节点之前 这个时候左树已经建立完成
      i++
      root.right = build(stop)
      return root
    }
    return null
  }
  return build()
};
