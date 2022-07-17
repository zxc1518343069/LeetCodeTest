// https://leetcode.cn/problems/QTMn0o/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 暴力
var subarraySum = function (nums, k) {
  let count = 0;
  for (let start = 0; start < nums.length; start++) {
    let sum = 0;
    for (let end = start; end >= 0; end--) {
      sum += nums[end];
      if (sum === k) {
        count++;
      }
    }
  }
  return count;
};

// 前缀和 暴力
subarraySum = function (nums, k) {
  let count = 0,
    len = nums.length;
  const arr = new Array(len).fill(0);

  // arr 代表 前n项得和
  for (let i = 0; i < len; i++) {
    arr[i + 1] = arr[i] + nums[i];
  }

  // 便利所有子数组
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (preSum[i] == k + preSum[j]) {
        count++;
      }
      // 如果我们想求nums[i..j]的和
      // 只需要一步操作preSum[j + 1] - preSum[i]即可，而不需要重新去遍历数组了。
    }
  }
  return count;
};
// 前缀和优化
subarraySum = function (nums, k) {
  const mp = new Map();
  mp.set(0, 1);
  let count = 0,
    pre = 0;

  // 便利nums 判断 是否存在 pre - k  即要求得数
  for (const x of nums) {
    pre += x;
    if (mp.has(pre - k)) {
      count += mp.get(pre - k);
    }
    if (mp.has(pre)) {
      mp.set(pre, mp.get(pre) + 1);
    } else {
      mp.set(pre, 1);
    }
  }
  return count;
};
