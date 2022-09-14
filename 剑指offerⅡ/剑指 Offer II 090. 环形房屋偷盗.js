// https://leetcode.cn/problems/PzWKhm/
/**
 * @param {number[]} nums
 * @return {number}
 */
// 变种题目， 考虑 取第一个不取最后一个 / 取最后一个不取第一个
var rob = function (nums) {
  const length = nums.length;
  if (length === 1) {
    return nums[0];
  } else if (length === 2) {
    return Math.max(nums[0], nums[1]);
  }
  return Math.max(robRange(nums, 0, length - 2), robRange(nums, 1, length - 1));
};
// 考虑到每间房屋的最高总金额只和该房屋的前两间房屋的最高总金额相关
// 因此可以使用滚动数组，在每个时刻只需要存储前两间房屋的最高总金额
const robRange = (nums, start, end) => {
  let first = nums[start],
    second = Math.max(nums[start], nums[start + 1]);
  for (let i = start + 2; i <= end; i++) {
    const temp = second;
    second = Math.max(first + nums[i], second);
    first = temp;
  }
  return second;
};
