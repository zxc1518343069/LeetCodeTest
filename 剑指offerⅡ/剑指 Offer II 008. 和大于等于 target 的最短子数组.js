// https://leetcode.cn/problems/2VG8Kg/
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// 一看就是滑动窗口类型题目
var minSubArrayLen = function (target, nums) {
  let left = 0,
    sum = 0,
    res = Infinity;
  const len = nums.length;

  for (let right = 0; right < len; right++) {
    sum += nums[right];
    while (left <= right && sum >= target) {
      res = Math.min(res, right - left + 1);
      sum -= nums[left++];
    }
  }
  return res === Infinity ? 0 : res;
};
// 2
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
// 1
console.log(minSubArrayLen(4, [1, 4, 4]));
// 0
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
