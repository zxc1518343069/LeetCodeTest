// https://leetcode.cn/problems/g5c51o/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 暴力+遍历 好low 的写法  代码思路还是 堆
// todo 堆 我是真不会
let topKFrequent = function (nums, k) {
  let map = new Map();
  let arr = [...new Set(nums)];

  nums.map((item) => {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  });

  return arr.sort((a, b) => map.get(b) - map.get(a)).slice(0, k);
};
console.log(topKFrequent((nums = [1, 1, 1, 2, 2, 3]), (k = 2)));
