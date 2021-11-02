// https://leetcode-cn.com/problems/invert-binary-tree/
// if (root === null) {
//   return null;
// }
// const left = invertTree(root.left);
// const right = invertTree(root.right);
// root.left = right;
// root.right = left;
// return root;


/* 递归 思路  先遍历到最深处 然后 依次向上交换他们的左右节点*/


var invertTree = function(root) {
  if (root === null)
    return null

  const left = invertTree(root.left)
  const right= invertTree(root.right)

  root.left = right
  root.right = left
  return root
};
