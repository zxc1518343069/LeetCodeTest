// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/

let maxProfit = function(prices) {
  if(!prices.length){
    return 0
  }
  let n = prices.length
  let max = 0
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (prices[j] > prices[i] && prices[j] - prices[i] > max) {
        max = prices[j] - prices[i]
      }
    }
  }
  return max
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]))
