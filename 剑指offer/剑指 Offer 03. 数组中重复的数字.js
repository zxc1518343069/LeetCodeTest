// https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
  let map = new Map();
  for (let i of nums) {
    if (map.has(i)) return i;
    map.set(i, 1);
  }
  return null;
};

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]))
