// https://leetcode.cn/problems/SsGoHC/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// 这个思路好像没什么特别的了
// 循环找就可以了
var merge = function (intervals) {
  if (intervals == null || !intervals.length) {
    return intervals;
  }
  // 先按照起始位置排序
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  const intervalsLen = intervals.length;
  let result = [];
  let i = 0;
  while (i < intervalsLen) {
    let j = i + 1;
    const cur = [...intervals[i]];
    // 判断中止大于起始位
    while (j < intervals.length && cur[1] >= intervals[j][0]) {
      // 合并 并取最大值 结尾值
      cur[1] = Math.max(cur[1], intervals[j][1]);
      j++;
    }
    result.push(cur);
    i = j;
  }
  return result;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
); // [ [ 1, 6 ], [ 8, 10 ], [ 15, 18 ] ]
