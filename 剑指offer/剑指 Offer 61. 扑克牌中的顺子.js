// https://leetcode-cn.com/problems/bu-ke-pai-zhong-de-shun-zi-lcof/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
/*

傻逼  为啥能出来3个0
 */
var isStraight = function(nums) {

  nums = nums.sort((a, b) => a - b).filter(item => item !== 0)

  if (nums[nums.length - 1] - nums[0] > 4) return false

  for (let i = 1; i < nums.length; i++) {
    console.log(i)
    if (nums[i] === nums[i - 1]) return false
  }
  return true
};

console.log(isStraight([1, 2, 3, 4, 5]))
console.log(isStraight([0, 0, 1, 2, 5]))
console.log(isStraight([13, 13, 9, 12, 10]))
