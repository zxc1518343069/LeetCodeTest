// https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
let levelOrder = function(root) {
  let res = []

  let q = [root]
  while (q.length){
    let tmp = []
    let len = q.length
    for (let i = 0; i < len; i++) {
      let cur = q.shift()
      tmp.push(cur.val)
      q.push(...cur.children)
    }
    res.push(tmp)
  }
  return res
};

console.log(levelOrder())
