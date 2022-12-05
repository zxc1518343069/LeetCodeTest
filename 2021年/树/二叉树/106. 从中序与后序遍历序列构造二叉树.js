// 中序遍历 inorder = [9,3,15,20,7]
// 后序遍历 postorder = [9,15,7,20,3]

var buildTree = function(inorder, postorder) {
  if (!postorder.length) return null;
  const top = postorder.pop(); // 3
  const root = new TreeNode(top); // 3
  const topIndex = inorder.indexOf(top); // 1

  // 9            9
  root.left = buildTree(inorder.slice(0, topIndex), postorder.slice(0, topIndex));
  root.right = buildTree(inorder.slice(topIndex + 1), postorder.slice(topIndex));
  return root;
};
