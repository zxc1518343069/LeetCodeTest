/**
 * @param {number[]} nums
 * @return {boolean}
 */


// 递归
const PredictTheWinner = (nums) => {
  // helper：基于从i到j的数组，当前选择的玩家所能赢对方的分数
  const helper = (i, j) => { // i，j是两端的索引
    if (i === j) {   // 此时只有一种选择，选的人赢对方nums[i]，且没有剩余可选，结束递归
      return nums[i];
    }
    // 选择左端。  - 对手赢的分数
    const pickI = nums[i] - helper(i + 1, j);
    // 选择右端  - 对手赢的分数
    const pickJ = nums[j] - helper(i, j - 1);
    return Math.max(pickI, pickJ);
  };

  return helper(0, nums.length - 1) >= 0; // 基于整个数组玩这个游戏，玩家1先手，>=0就获胜
};


// var PredictTheWinner = function(nums) {
//   if (nums.length === 1 || nums.length % 2 === 0)
//     return true // 偶数必赢
//
//   let one = 0, two = 0
//
// };

console.log(PredictTheWinner(nums = [1, 5, 2])) // false
console.log(PredictTheWinner(nums = [1,5,233,7])) // true
console.log(PredictTheWinner(nums = [2, 4, 55, 6, 8])) // false
