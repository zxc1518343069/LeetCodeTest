// https://leetcode-cn.com/problems/next-greater-element-ii/
let nextGreaterElements = function(nums) {
  let start = nums[0]

  let stack = []
  let map = new Map()
  let res = []
  for (let i = 0; i < 2 * nums.length;i++) {
    while (start.length && nums[i] > stack[stack.length - 1]){
      map.set(stack.pop(), nums[i])
    }
    stack.push(nums[i])
    console.log(stack)
  }
  console.log(stack)

  while(stack.length){
    map.set(stack.pop(), -1)
  }
  nums.forEach(item => {
    res.push(map.get(item))
  })
  return res
};

console.log(nextGreaterElements([1,2,1]))  // [2,-1,2]
