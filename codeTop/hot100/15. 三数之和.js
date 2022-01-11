/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/* 暴力法*/
let threeSum = function(nums) {
  let result = [];
  let repeatSet = new Set();
  let len = nums.length;
  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      for (let k = j + 1; k < len; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          let tmpResult = [nums[i], nums[j], nums[k]];
          let tmpSortStr = tmpResult.sort().join(''); // 排序  方便去重
          if (!repeatSet.has(tmpSortStr)) {
            result.push(tmpResult);
            repeatSet.add(tmpSortStr)
          }
        }
      }
    }
  }
  return result;
};

// hashMap  能做出来就是有点慢
threeSum = function(nums) {
  let res = []
  const len = nums.length
  nums.sort() // 排序方便判断
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) // 第一个数大于0 后面不会 ==0
      continue
    if (nums[i] === nums[i - 1]) // 用过了 去重
      continue

    let target = 0 - nums[i]
    let map = new Map()
    console.log(i)
    for (let j = i + 1; j < len; j++) {
      if (res.length) { // 去重
        const top = res[res.length - 1]
        if (top[1] === target - nums[j] && top[2] === nums[j]) {
          continue
        }
      }
      if (map.has(nums[j])) {
        res.push([nums[i], map.get(nums[j]), nums[j]])
      }
      map.set(target - nums[j], nums[j])
    }
  }
  return res
}


/* 双指针 */
// 题目要求返回的是元素本身 所以 可以排序
threeSum = (nums) => {
  const len = nums.length
  const res = []
  if (len < 3) return []
  nums.sort((a, b) => a - b)
  if (nums[0] > 0) return []
  for (let i = 0; i < len - 2; i++) {
    if (nums[i] === nums[i - 1]) continue // 去重处理
    let left = i + 1, right = len - 1
    const target = nums[i]

    while (left < right) {
      if (nums[left] + nums[right] + target === 0) {
        res.push([nums[left], nums[right], target])
        // 去重
        while (left < right && nums[left] === nums[left + 1]) {
          left++
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--
        }
        left++
        right--
      } else if (nums[left] + nums[right] + target > 0) {
        right--
      } else {
        left++
      }
    }
  }
  return res
}


console.log(threeSum([0, 0, 0, 0])) // 没有去重 [ [ 0, 0, 0 ], [ 0, 0, 0 ] ]
console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]))
