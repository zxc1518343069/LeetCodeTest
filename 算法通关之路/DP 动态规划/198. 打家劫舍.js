// https://leetcode-cn.com/problems/house-robber/

/**
 * @description  DP one
 * @param {number[]} nums
 * @return {number}
 */

// 自顶向下的动态规划
let rob4 = (nums) => {
  const len = nums.length;
  if (!len) return 0
  if (len < 2) return nums[0]
  const memo = new Array(nums.length).fill(0)

  const help = (n) => {
    if (n >= len) return 0

    // memo 代表 偷与不偷 的最大值    要获得当前状态  必须依赖前两个状态
    memo[n] = Math.max(help(n + 1), help(n + 2) + nums[len - 1 - n])

    return memo[n]
  }

  const res = help(0)
  console.log(memo)
  return res

}


let rob = function(nums) {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  let n = nums.length  // 总共有几家
  let a = Array.from(new Array(n), () => new Array(2).fill(0))
  // 0 表示不偷  1表示偷
  a[0][0] = 0
  a[0][1] = nums[0]

  // 第i个不偷
  // dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1])
  // 不知道i-1是否能偷，偷也不违背相邻原则
  // 第i个偷
  // dp[i][1] = nums[i] + Math.max(dp[i-1][0]+0) = nums[i] + dp[i-1][0]
  // 第i房偷，则先加nums[i]之金额，且第i-1就一定不能偷，否则违背相邻原则
  for (let i = 1; i < nums.length; i++) {
    a[i][0] = Math.max(a[i - 1][0], a[i - 1][1])
    a[i][1] = a[i - 1][0] + nums[i]
  }

  return Math.max(a[n - 1][0], a[n - 1][1])
};


/*
* DP two 一维数组
* */
let rob2 = function(nums) {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  let n = nums.length  // 总共有几家
  let a = new Array(n)
  a[0] = nums[0]; // 3
  a[1] = Math.max(nums[0], nums[1]); // 3
  // 如果只有两位数 就不会进循环  会报错
  for (let i = 2; i < n; i++) { // 比较 偷与不偷的最大值
    a[i] = Math.max(a[i - 1], a[i - 2] + nums[i]); // 3  3+2
  }
  return a[n - 1];
};


let rob3 = function(nums) {
  let n = nums.length;
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return nums[0];
  }
  if (n === 2) {
    return Math.max(nums[0], nums[1]);
  }
  let dp = new Array(n);
  dp[0] = 0;
  dp[1] = nums[0];
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
  }
  return dp[n];
};
// 4
console.log(rob3([1, 2, 3, 1]))
console.log(rob4([1, 2, 3, 1]))
console.log(rob4([1, 2]))
