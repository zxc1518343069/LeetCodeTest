// https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// api做法
var search = function (nums, target) {
  return (
    nums.lastIndexOf(target) -
    nums.indexOf(target) +
    (nums.indexOf(target) === -1 ? 0 : 1)
  );
};

// 两边向中心查找
search = function (nums, target) {
  if (!nums.length) return 0;

  let left = 0,
    right = nums.length - 1;
  while (nums[left] !== target && left < nums.length) {
    left++;
  }
  while (nums[right] !== target && right >= 0) {
    right--;
  }
  return left <= right ? right - left + 1 : 0;
};

// 二分做法

search = function (nums, target) {
  const length = nums.length;
  let start = -1,
    end = -1;

  let left = 0,
    right = length - 1;
  // 找到左边界：找到第一次出现
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      start = mid;
      right = mid - 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  left = 0;
  right = length - 1;

  // 找到右边界：找到第2次出现
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      end = mid;
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return start <= end && start !== -1 ? end - start + 1 : 0;
};

console.log(search([5, 7, 7, 8, 8, 10], 8));
// console.log(search([5, 7, 7, 8, 8, 10], 6));
