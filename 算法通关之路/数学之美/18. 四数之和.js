// https://leetcode-cn.com/problems/4sum/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// 暴力法  时间复杂度  O n^4   空间复杂度 On^4   超时
let fourSum = function(nums, target) {
  const res = [], tmp = [], len = nums.length, map = new Map()

  nums.sort((a, b) => a - b)

  const dfs = (index, remain) => {
    // 中止条件
    if (tmp.length > 4) return
    if (tmp.length === 4 && remain === 0) {
      // 去重
      if (!map.has(tmp.toString())) {
        map.set(tmp.toString(), true)
        return res.push([...tmp])
      }
    }
    // 循环条件
    for (let i = index; i < len; i++) {
      tmp.push(nums[i])
      dfs(i + 1, remain - nums[i])
      tmp.pop()
    }
  }
  dfs(0, target)
  return res
};

fourSum = function(nums, target) {
  const res = [], tmp = []
  nums.sort((a, b) => a - b)
  const findTwoSum = (newNum, N, remain) => {
    const len = newNum.length
    // 中止条件
    if (N < 2 || tmp.length > 2 || newNum.length < N) return
    // 输入结果
    if (N === 2) {
      let left = 0, right = len - 1
      // 三数之和的板子
      while (left < right) {
        if (newNum[left] + newNum[right] === remain) {
          res.push([...tmp, newNum[left], newNum[right]])
          left++
          right--
          while (left < right && newNum[left] === newNum[left - 1]) {
            left++
          }
          while (left < right && newNum[right] === newNum[right + 1]) {
            right--
          }
        } else if (newNum[left] + newNum[right] > remain) {
          right--
        } else {
          left++
        }
      }
    } else {
      for (let i = 0; i < len; i++) {
        if (newNum[i] === newNum[i - 1]){
          continue
        }
        const tmpNum = [...newNum].splice(i + 1)
        tmp.push(newNum[i])
        findTwoSum(tmpNum, N - 1, remain - newNum[i])
        tmp.pop()
      }
    }
  }
  findTwoSum(nums, 4, target)
  return res
};


// 分治  分解成 两个两数之和


// console.log(fourSum(nums = [1, 0, -1, 0, -2, 2], target = 0))
// console.log(fourSum(nums = [2, 2, 2, 2, 2], target = 8))
console.log(fourSum(nums = [-2, -1, -1, 1, 1, 2, 2], target = 0)) // [[-2,-1,1,2],[-1,-1,1,1]]
//  [[-2,-1,1,2],[-2,-1,1,2],[-1,-1,1,1]]
