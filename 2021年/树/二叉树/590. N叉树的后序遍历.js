// https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
let postorder = function(root) {
  let res = []
  const postOrders = (root)=>{
    if (root === null)
      return
    // res.push(root.val) 方在这里就是一个先序遍历
    for (let i = 0; i < root.children.length; i++) {
      postOrders(root.children[i])
    }
    res.push(root.val)
  };
  postOrders(root)
  return res
}


console.log(postorder([1, null, 3, 2, 4, null, 5, 6]))
