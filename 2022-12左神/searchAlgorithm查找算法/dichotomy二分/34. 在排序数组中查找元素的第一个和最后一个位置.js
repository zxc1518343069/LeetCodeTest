/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// api
// https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/
var searchRange = function (nums, target) {
  return [nums.indexOf(target), nums.lastIndexOf(target)];
};
// 适用场景 在一个有序数组中，找>=某个数最左侧的位置
// 题目中 信息  有序 查找数 logN
// 思路 找到最左边的  因为是升序 找到他的下一个 的 index -1 就是最右边坐标
searchRange = (nums, target) => {
  if (!nums.length) return [-1, -1];
  const findLeftIndex = (nums, target) => {
    let left = 0,
      right = nums.length - 1;
    while (left <= right) {
      const mid = left + ((right - left) >> 1);
      if (nums[mid] > target) {
        right = mid - 1;
      } else if (nums[mid] < target) {
        // 判断小于情况
        left = mid + 1;
      } else {
        // 判断相等情况
        right = mid - 1;
      }
    }
    return left;
  };

  if (nums[findLeftIndex(nums, target)] !== target) {
    return [-1, -1];
  } else {
    return [findLeftIndex(nums, target), findLeftIndex(nums, target + 1) - 1];
  }
};
console.log(searchRange((nums = [5, 7, 7, 8, 8, 10]), (target = 8)));
console.log(searchRange((nums = [1, 1]), (target = 1)));
console.log(searchRange((nums = [1]), (target = 1)));
