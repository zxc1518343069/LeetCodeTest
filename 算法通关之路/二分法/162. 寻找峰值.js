// https://leetcode-cn.com/problems/find-peak-element/
/**
 * @param {number[]} nums
 * @return {number}
 */

// 题目给出要 logN
var findPeakElement = function(nums) {

  let len = nums.length,
      left = 0,
      right = len - 1

  while (left <= right) { // = 考虑一个的情况
    const mid = left + ((right - left) >> 1)
    if (mid + 1 < len && nums[mid] < nums[mid + 1]) { // 判断在区域内且 右边比自身大
      left = mid + 1
    } else if (mid - 1 >= 0 && nums[mid] < nums[mid - 1]) { // 相反
      right = mid - 1
    } else {
      return mid
    }
  }
  return -1
};

console.log(findPeakElement(nums = [1, 2, 3, 1]))
console.log(findPeakElement(nums = [1]))
