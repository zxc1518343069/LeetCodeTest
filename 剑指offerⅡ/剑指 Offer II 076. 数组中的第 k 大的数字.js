// https://leetcode.cn/problems/xx4gT2/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 直接api 多块
let findKthLargest = function (nums, k) {
  nums.sort((a, b) => b - a).slice(0, k);
  return nums[k - 1];
};
// todo 建堆 我不会
