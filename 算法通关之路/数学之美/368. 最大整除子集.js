/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
  const len = nums.length;
  if (len < 1) return nums

  const maxList = new Array(len).fill(1)// 用来记录结果的数组
  nums.sort((a, b) => a - b)
  let maxSize = 1, maxValue = maxList[0]

  // 找到列表中所有数的  最大子集个数列表  maxList   和 最大子集个数中 的最大数 maxValue  以及对应的 最大子集数 maxSize
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0) {
        maxList[i] = Math.max(maxList[i], maxList[j] + 1)
      }
    }
    // 做数据的交替
    if (maxList[i] > maxSize) {
      maxSize = maxList[i]
      maxValue = nums[i]
    }
  }

  // 从已知条件中获得 最大子集
  const res = []
  if (maxSize === 1) {// 证明没有
    res.push(nums[0])
    return res
  }

  for (let i = len - 1; i >= 0 && maxSize; i--) {
    if (maxList[i] === maxSize && maxValue % nums[i] === 0) {
      res.push(nums[i])
      maxSize--
      maxValue = nums[i]
    }

  }
  return res
};


console.log(largestDivisibleSubset( [1,2,3]))
console.log(largestDivisibleSubset(  [1,2,4,8]))
