// https://leetcode-cn.com/problems/split-array-into-consecutive-subsequences/

/* 贪心， 先找一个数组存储字符个数。
*       再找一个数组记录能连续的长度
*
* 然后判断
* */

let isPossible = function(nums) {
  if (nums.length < 3) return false
  let max = nums[nums.length - 1]
  let arr = new Array(max + 2).fill(0) /* 记录出现次数*/
  let arr2 = new Array(max + 2).fill(0) /* 存储的是以几结尾的 连续子序列 */

  for (let num of nums) {
    arr[num]++
  }

  for (let num of nums) {

    if (arr[num] === 0) continue  // 等于0  代表这个数没出现 直接跳过
    else if (arr2[num - 1] > 0) {  // 为什么要-1  要判断它前一位是否有存在。存在才可以再它后面继续走
      arr2[num - 1]--
      arr2[num]++
    } else if (arr[num + 1] > 0 && arr[num + 2] > 0) {
      //   证明可以连续
      arr[num + 1]--
      arr[num + 2]--
      arr2[num + 2]++
    } else {
      return false
    }
    arr[num]--
  }

  console.log(arr2)
  return true
}

console.log(isPossible([1, 2, 3, 3, 4, 5]))
