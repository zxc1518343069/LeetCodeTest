// https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/
let constructFromPrePost = function(pre, post) {
  if (pre.length === 0)
    return null

  // 前序遍历  0 的位置一定是根节点
  let rootVal = pre[0]

  // 后序遍历  找根节点   就找到了  左树的结点集合
  let index = post.indexOf(pre[1]) // 2

  let root = new TreeNode(rootVal)

  // 依次走2个  也就是 3个节点
  root.left = constructFromPrePost(pre.slice(1, index + 2), post.slice(0, index + 1))
  root.right = constructFromPrePost(pre.slice(index + 2), post.slice(index + 1, post.length - 1));

  return root
};
// pre = [1,2,4,5,3,6,7], post = [4,5,2,6,7,3,1]
