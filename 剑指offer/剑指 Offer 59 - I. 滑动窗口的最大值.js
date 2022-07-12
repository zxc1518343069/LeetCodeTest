// https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const len = nums.length;
  if (len < k || k === 0) return [];
  let res = [],
    queue = []; // 存储下标
  for (let i = 0; i < len; i++) {
    if (queue[0] <= i - k) queue.shift(); // 判断下表是否在区域内
    while (queue.length && nums[i] >= nums[queue[queue.length - 1]])
      queue.pop(); // 判断要加入的值是否大于 窗口内
    queue.push(i);
    if (i >= k - 1) res.push(nums[queue[0]]);
  }
  return res;
};

maxSlidingWindow = function (nums, k) {
  const len = nums.length;
  if (len < k || k === 0) return [];
  let res = [],
    queue = []; // 存储下标 第一位永远是最大的
  for (let i = 0; i < len; i++) {
    // 超过滑动窗口大小 就把 queue 取出一个
    if (queue[0] <= i - k) {
      queue.shift();
    }

    // 保证 queue 中的值一定  k窗口内 是最大的
    while (queue.length && nums[i] >= nums[queue[queue.length - 1]])
      queue.pop();

    queue.push(i);

    // 判断是否超过滑动窗口大小 超过就放入一个值
    if (i + 1 - k >= 0) {
      res.push(nums[queue[0]]);
    }
  }
  return res;
};
console.log(maxSlidingWindow((nums = [1, 3, -1, -3, 5, 3, 6, 7]), (k = 3)));
