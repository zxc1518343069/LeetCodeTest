/**
 * 给定一个升序整数数组，写一个函数搜索 nums 中数字 target。
 * 如果 target 存在，返回它的下标，否则返回 -1。
 * 注意，这个数组的大小是未知的。
 * 你只可以通过 ArrayReader 接口访问这个数组，ArrayReader.get(k) 返回数组中第 k 个元素（下标从 0 开始）。
 * 你可以认为数组中所有的整数都小于 10000。如果你访问数组越界，ArrayReader.get 会返回 2147483647。
 *
 * 样例 1：
 * 输入: array = [-1,0,3,5,9,12], target = 9
 * 输出: 4
 * 解释: 9 存在在 nums 中，下标为 4
 *
 * 样例 2：
 * 输入: array = [-1,0,3,5,9,12], target = 2
 * 输出: -1
 * 解释: 2 不在数组中所以返回 -1
 */

/**
 *
 * @param {number[]} nums
 * @param {number} target
 */
// 二分模板代码
const search = (nums, target) => {
  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    const mid = Math.floor((high - low) / 2) + low;
    const num = nums[mid];
    if (num === target) {
      return mid;
    } else if (num > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 2));
