// https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/

/*
* 思路 最小的递增序列为 1
* 循环数组  发现大于 就++  否则 = 1
* 最后 比较 较大值
* */
let findLengthOfLCIS = function(nums) {
  if (nums.length < 2)
    return nums.length
  let ans = 1,
      len = nums.length,
      res = 1
  for (let i = 1; i < len; i++) {
    if (nums[i] > nums[i - 1])
      ans++
    else
      ans = 1
    res = Math.max(res, ans)
  }
  return res
};
console.log(findLengthOfLCIS(nums = [1, 3, 5, 4, 7]))// 3
console.log(findLengthOfLCIS(nums = [2, 2, 2, 2, 2]))// 1

