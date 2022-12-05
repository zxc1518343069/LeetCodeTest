// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/

let maxProfit = function(prices) {
  if (!prices.length)
    return 0
  let res = 0
  let n = prices.length
  for (let i = 1; i < n; i++) {
    res += Math.max(0,prices[i]-prices[i-1])
  }
  return res
};

console.log(maxProfit([7,1,5,3,6,4]))
