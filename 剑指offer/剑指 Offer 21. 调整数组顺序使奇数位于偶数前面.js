// https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
  let i = 0
  let j = nums.length - 1
  while(i  < j) {
    if (nums[i] % 2 == 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
      j--
    }else
      i++
  }
  return nums
};


console.log(exchange([1,2,3,4]))
