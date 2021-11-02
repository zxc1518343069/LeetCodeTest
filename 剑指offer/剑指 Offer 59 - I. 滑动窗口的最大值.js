// https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const len = nums.length
  if (len < k || k === 0) return []
  let res = [], queue = [] // 存储下标
  for (let i = 0; i < len; i++) {
    if (queue[0] <= i - k) queue.shift() // 判断下表是否在区域内
    while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) queue.pop() // 判断要加入的值是否大于 窗口内
    queue.push(i)
    if (i >= k - 1) res.push(nums[queue[0]])
  }
  return res
};

console.log(maxSlidingWindow(nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3))
