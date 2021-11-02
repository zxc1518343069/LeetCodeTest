// https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/



/*  广度优先遍历的  为什么要用广度 因为你要判断这一层节点谁先没有子节点*/
var minDepth = function(root) {
  if(!root) return 0
  let stack = [[root,1]]
  while(stack.length){
    let [n,l] = stack.shift()
    if(!n.left && !n.right) return l
    if(n.left) stack.push([n.left,l+1])
    if(n.right) stack.push([n.right,l+1])
  }
};

