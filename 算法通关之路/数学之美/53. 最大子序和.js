// https://leetcode-cn.com/problems/maximum-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */

// DP 最大子序列和 =  前面最之和+ 当前之和
let maxSubArray = function(nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(0, nums[i - 1]) + nums[i]
  }
  return Math.max(...nums)
};

// 暴力  超时
let maxSubArray2 = function(nums) {
  const len = nums.length
  let total = 0, max = -Infinity
  for (let i = 0; i < len; i++) {
    total = 0
    for (let j = i; j < len; j++) {
      total += nums[j]
      max = Math.max(total, max)
    }
  }
  return max
};

// 分治
let maxSubArray3 = function(nums) { // 不太会写
  const len = nums.length
  let max = -Infinity

  const helper = (left, right) => {
    // 终止条件
    if (left > right) return -Infinity
    const mid = left + ((right - left) >> 1)
    // 获取左右各自的最大值
    const leftMax = helper(left, mid)
    const rightMax = helper(mid + 1, right)


  }

  helper(0, len - 1)

  return max
};

// 前缀和
let maxSubArray4 = function(nums) {
  // num[1] +num[2]+num[0] = Sum[3] - Sum[0]
  // 所以 最大子序列和 =  len - 最小子序列和
  const len = nums.length
  let maxSum = nums[0], minSum = 0, sum = 0

  for (let i = 0; i < len; i++) {
    sum += nums[i]
    maxSum = Math.max(maxSum, sum - minSum)
    minSum = Math.min(minSum, sum)
  }
  return maxSum
};


console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSubArray2([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSubArray4([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
