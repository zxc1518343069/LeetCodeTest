// https://leetcode-cn.com/problems/trapping-rain-water/

// 参考解法 https://leetcode-cn.com/problems/trapping-rain-water/solution/jie-yu-shui-by-leetcode-solution-tuvc/

/**
 * @param {number[]} height
 * @return {number}
 */

// 暴力
var trap = function(height) {

  let res = 0, len = height.length
  for (let i = 0; i < len; i++) {
    let maxLeft = 0, maxRight = 0

    // 找到左边最大值
    for (let j = i; j >= 0; j++) {
      maxLeft = Math.max(maxLeft, height[j])
    }
// 找到右边 最大值
    for (let j = i; j < len; j++) {
      maxRight = Math.max(maxRight, height[j])
    }

    res += Math.min(maxLeft, maxRight) - height[i];

  }
  return res
};

// DP
trap = function(height) {
  const n = height.length;
  if (n === 0) {
    return 0;
  }

  const leftMax = new Array(n).fill(0);

  leftMax[0] = height[0];

  // 记录左边最大值
  for (let i = 1; i < n; ++i) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  const rightMax = new Array(n).fill(0);
  rightMax[n - 1] = height[n - 1];

  // 记录右边最大值
  for (let i = n - 2; i >= 0; --i) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  let ans = 0;
  for (let i = 0; i < n; ++i) {
    ans += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return ans;
};

// 单调栈

// 双指针
