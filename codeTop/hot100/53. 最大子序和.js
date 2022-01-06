// https://leetcode-cn.com/problems/maximum-subarray/

/*
* DP
* 求解子问题   (i)的最大和 =  (i-1 )的最大和 +  i
* 状态定义 f[i]
* DP方程 f[i] = max(0,f[i-1]) + i
* */

// 这道题 应该有其他解法，记得更新下
let maxSubArray = function(nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(0, nums[i - 1]) + nums[i]
  }
  return Math.max(...nums)
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
