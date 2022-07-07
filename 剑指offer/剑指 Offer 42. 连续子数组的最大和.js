// https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(0, nums[i - 1]) + nums[i];
  }
  return Math.max(...nums);
};

// Dp
maxSubArray = function (nums) {
  const len = nums.length;
  let max = 0;
  for (let i = 1; i < len; i++) {
    nums[i] = Math.max(nums[i - 1], 0) + nums[i];
  }
  return Math.max(...nums);
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
