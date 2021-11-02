// https://leetcode-cn.com/problems/gu-piao-de-zui-da-li-run-lcof/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (!prices.length) return 0
  let max = 0, len = prices.length
  for (let i = 0; i < len; i++) {ha
    for (let j = i + 1; j < len; j++) {
      if (prices[j] > prices[i] && prices[j] - prices[i] > max) max = prices[j] - prices[i]
    }
  }
  return max
};


console.log(maxProfit([7, 1, 5, 3, 6, 4]))
