// https://leetcode.cn/problems/7WqeDu/
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
// 暴力
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= i + k && j < nums.length; j++) {
      if (Math.abs(nums[j] - nums[i]) <= t) return true;
    }
  }
  return false;
};
// todo 滑动窗口 / 桶排序  我真不会
