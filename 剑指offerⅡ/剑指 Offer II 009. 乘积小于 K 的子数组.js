// https://leetcode.cn/problems/ZVAVXX/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 今天看来是捅了滑动窗口了
// 跟以前得滑动窗口最不一样得就是 这个滑动窗口大小是动态得。
// right - left + 1 = 滑动窗口大小
var numSubarrayProductLessThanK = function (nums, k) {
  let len = nums.length,
    left = 0,
    sum = 1,
    res = 0;

  for (let right = 0; right < len; right++) {
    sum *= nums[right];
    while (left <= right && sum >= k) {
      sum /= nums[left++];
    }
    res += right >= left ? right - left + 1 : 0;
  }
  return res;
};
// 8
console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));
