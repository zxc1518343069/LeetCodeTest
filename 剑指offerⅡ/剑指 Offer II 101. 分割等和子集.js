// https://leetcode.cn/problems/NUPfPr/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 思路就是错的怎么可能做对

var canPartition = function (nums) {
  if (nums.length < 2) {
    return false;
  }
  nums.sort((a, b) => a - b);

  let left = 0,
    right = nums.length - 1,
    leftSum = nums[0],
    rightSum = nums[nums.length - 1];

  while (left <= right) {
    // console.log(leftSum, rightSum);
    if (leftSum < rightSum) {
      leftSum += nums[++left];
    } else if (leftSum > rightSum) {
      rightSum += nums[--right];
    } else {
      if (right - left === 1) {
        return true;
      } else if (right - left === 2) {
        return false;
      } else {
        leftSum += nums[++left];
        rightSum += nums[--right];
      }
    }
  }
  return false;
};
console.log(canPartition([1, 2, 3, 5]));
console.log(canPartition([1, 1, 1, 1, 1]));
console.log(canPartition([1, 3, 4, 4]));
console.log(canPartition([1, 5, 11, 5]));
