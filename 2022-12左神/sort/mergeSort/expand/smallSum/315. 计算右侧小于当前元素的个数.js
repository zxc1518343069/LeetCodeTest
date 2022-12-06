// https://leetcode.cn/problems/count-of-smaller-numbers-after-self/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 暴力 超时
const countSmaller = (nums) => {
  const counts = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        count++;
      }
    }
    counts[i] = count;
  }
  return counts;
};
// 二分

// 归并排序
