// https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/

/**
 * @param {number[]} nums
 * @return {string}
 */
/*
思路  最小 + 最小 = 最小
x+ y < y + x  这里指的是 '102' < '210'
也就是个排序  判断 a b   是正序还是倒叙
 */
var minNumber = function(nums) {
  return nums.sort((a, b) =>
      ('' + a + b) - ('' + b + a)
  ).join('')
};
console.log(minNumber([10, 2]))
