// https://leetcode-cn.com/problems/3sum-closest/submissions/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  if (nums.length < 3) return
  nums.sort((a, b) => a - b)
  let res = nums[0] + nums[1] + nums[2]  //  排完序了 前三个想加一定是最小值
  const len = nums.length
  for (let i = 0; i < len - 2; i++) { // 因为3个数  所以只找n-2即可
    // 去重
    if (i && nums[i] === nums[i - 1]) continue // 去重 将要走的对比走过的

    let left = i + 1, right = len - 1
    while (left < right) {
      const tmpSum = nums[i] + nums[left] + nums[right]

      if (tmpSum === target) return tmpSum
      else if (Math.abs(tmpSum - target) < Math.abs(res - target)) {
        res = tmpSum
      }

      if (tmpSum < target) left++
      else  right--
    }
  }
  return res
};

console.log(threeSumClosest([-1, 2, 1, -4], 1))
console.log(threeSumClosest([0, 0, 0], 1))
