/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
let findMode = function(root) {
  if (root === null) return []
  let count = 0  // 1  1
  let baseValue = 0  // 2  1
  let tmp = 0    // 1  1
  let arr = []   // [2]

  // judge
  let judge = (val)=>{
    if (val === baseValue) {
      ++tmp
    } else {
      tmp = 1
      baseValue = val
    }
    if (tmp === count) arr.push(baseValue)
    if (tmp > count) {
      count = tmp
      arr = [baseValue]
    }
  }

  let dfs = (root)=>{
    root.left&&dfs(root.left)
    judge(root.val)
    root.right&&dfs(root.right)
  }
  dfs(root)
  return arr
};
