// https://leetcode.cn/problems/SsGoHC/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals == null || !intervals.length) {
    return intervals;
  }
  // 先按照起始位置排序
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });
};
