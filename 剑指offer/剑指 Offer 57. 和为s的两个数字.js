// https://leetcode-cn.com/problems/he-wei-sde-liang-ge-shu-zi-lcof/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/*
 重点  有序数组
 */
var twoSum = function(nums, target) {
  let i = 0, j = nums.length - 1
  while (i < j) {
    if (nums[i] + nums[j]> target) j--
    else if (nums[i] + nums[j] < target) i++
    else return [nums[i] , nums[j]]
  }
  return []
};

console.log(twoSum(nums = [2,7,11,15], target = 9))
console.log(twoSum(nums = [10,26,30,31,47,60], target = 40))
