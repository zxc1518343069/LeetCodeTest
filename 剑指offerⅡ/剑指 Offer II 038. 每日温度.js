//https://leetcode.cn/problems/iIQa4I/
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// 思路 直接遍历即可
// 暴力
var dailyTemperatures = function (temperatures) {
  const len = temperatures.length,
    res = new Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (temperatures[j] > temperatures[i]) {
        res[i] = j - i;
        break;
      }
    }
  }
  return res;
};
// 思路 记录最高温度
// 单调栈
dailyTemperatures = function (temperatures) {
  let len = temperatures.length;
  let stack = []; // 记录最高温度的下标
  let res = new Array(temperatures.length).fill(0);

  for (let i = 0; i < len; i++) {
    // 当存在最高温度 且 当前温度大于 最高温度时 记录下标
    // 注意 这里是个while  直到判断到没有比他大的为止
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      let pre = stack.pop();
      res[pre] = i - pre;
    }
    stack.push(i);
  }
  return res;
};
// [1, 1, 4, 2, 1, 1, 0, 0]
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
