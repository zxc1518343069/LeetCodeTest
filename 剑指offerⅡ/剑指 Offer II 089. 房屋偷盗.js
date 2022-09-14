// https://leetcode.cn/problems/Gu0c2T/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  let n = nums.length; // 总共有几家
  let tmp = new Array(n);
  // tmp 代表 偷 index 家的 最大金额
  tmp[0] = nums[0];
  // 谁家高偷谁家
  tmp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    tmp[i] = Math.max(tmp[i - 1], tmp[i - 2] + nums[i]);
  }
  return tmp[n - 1];
};
console.log(rob([1, 2, 3, 1]));
console.log(rob([1, 2]));
