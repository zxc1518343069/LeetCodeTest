// https://leetcode.cn/problems/shu-zu-zhong-de-ni-xu-dui-lcof/

/**
 * @param {number[]} nums
 * @return {number}
 */
// 暴力 超时
var reversePairs = function (nums) {
  let res = 0;
  const length = nums.length;
  for (let i = 0; i < length; ++i) {
    for (let j = i + 1; j < length; ++j) {
      nums[i] > nums[j] && ++res;
    }
  }

  return res;
};
// 正确解法  归并排序
// Todo: 以后我一定好好学10大排序
