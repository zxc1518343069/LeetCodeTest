const test = (nums,target) => {
  // 1 2 3 6 8 -1 -1
  let sum = nums.reduce((a, b) => a + b)
  const half = sum / target
  console.log(half)
  let curVal = 0
  if (half % 2 !== 0) // 奇数
    return false
  let res = []
  const dfs = (currentValue,index) => {
    console.log(currentValue)
    if (index > nums.length)
      return
    if (currentValue === half){
      res.push(index - 1)
      curVal = 0
      return
    }
    dfs(currentValue + nums[index],index+1)
  }
  dfs(curVal,0)
  return res
}
console.log(test([1,2,3,6,8,-1,-1],3))
