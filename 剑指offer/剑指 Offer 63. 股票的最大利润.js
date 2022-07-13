// https://leetcode-cn.com/problems/gu-piao-de-zui-da-li-run-lcof/
/**
 * @param {number[]} prices
 * @return {number}
 */
// 暴力
var maxProfit = function (prices) {
  if (!prices.length) return 0;
  let max = 0,
    len = prices.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (prices[j] > prices[i] && prices[j] - prices[i] > max)
        max = prices[j] - prices[i];
    }
  }
  return max;
};

// 暴力优化 一次循环
maxProfit = function (prices) {
  if (!prices.length) return 0;
  let max = 0,
    len = prices.length,
    pre = Infinity; // 记录 买入价格
  for (let i = 0; i < len; i++) {
    // 记录最大值
    max = Math.max(prices[i] - pre, max);
    // 因为买入时间的i 一定在后面
    pre = Math.min(pre, prices[i]);
  }
  return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
