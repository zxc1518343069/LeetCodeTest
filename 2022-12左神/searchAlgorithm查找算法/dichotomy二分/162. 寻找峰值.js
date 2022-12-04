// url https://leetcode.cn/problems/find-peak-element/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  const len = nums.length;
  let left = 0,
    right = len - 1;
  if (len === 1) {
    return 0;
  }
  // 因为要找 峰值。 所以判断 小于 不满足就 移动
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1;
    } else if (nums[mid] < nums[mid - 1]) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};
console.log(findPeakElement((nums = [1, 2, 3, 1])));
// console.log(findPeakElement((nums = [1]))); // 0
