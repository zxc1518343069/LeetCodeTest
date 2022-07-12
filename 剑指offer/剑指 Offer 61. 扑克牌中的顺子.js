// https://leetcode-cn.com/problems/bu-ke-pai-zhong-de-shun-zi-lcof/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
/*

傻逼  为啥能出来3个0
 */
var isStraight = function (nums) {
  nums = nums.sort((a, b) => a - b).filter((item) => item !== 0);

  if (nums[nums.length - 1] - nums[0] > 4) return false;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) return false;
  }
  return true;
};

// 这个题目可以反其道而行之。 看看什么情况下形成不了
isStraight = function (nums) {
  // 获得没有0 的数字个数
  nums = nums.sort((a, b) => a - b).filter((item) => item !== 0);

  // 判断差值。 如果最大最小值差值 大于4 则一定组成不了。注意 nums。length = 5
  if (nums[nums.length - 1] - nums[0] > 4) return false;

  // 如果有相等的也成不了
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) return false;
  }
  return true;
};

console.log(isStraight([1, 2, 3, 4, 5]));
console.log(isStraight([0, 0, 1, 2, 5]));
console.log(isStraight([13, 13, 9, 12, 10]));
