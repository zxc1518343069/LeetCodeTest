/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
  if (nums.length === 1 || nums.length % 2 === 0)
    return true // 偶数必赢

  let one = 0, two = 0

  const findSidesMax = () => {
    if (!nums.length) return 0
    const fist = nums[0], last = nums[nums.length - 1]
    console.log(fist,last)
    if (last > fist)
      return nums.pop()
    else {
      return nums.shift()
    }
  }


  while (nums.length !== 0) {
    one += findSidesMax()
    two += findSidesMax()
  }
  console.log(one,two)
  return one >= two

};

// console.log(PredictTheWinner(nums = [1, 5, 2]))
console.log(PredictTheWinner(nums = [2,4,55,6,8]))
