// https://leetcode.cn/prob
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 双指针方案
// 其他方案 参考 15.三数之和.js
var threeSum = function (nums) {
  const len = nums.length;
  const res = [];
  if (len < 3) return [];
  nums.sort((a, b) => a - b);
  if (nums[0] > 0) return [];
  for (let i = 0; i < len - 2; i++) {
    if (nums[i] === nums[i - 1]) continue; // 去重处理
    let left = i + 1,
      right = len - 1;
    const target = nums[i];

    while (left < right) {
      if (nums[left] + nums[right] + target === 0) {
        res.push([nums[left], nums[right], target]);
        // 去重
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      } else if (nums[left] + nums[right] + target > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return res;
};
