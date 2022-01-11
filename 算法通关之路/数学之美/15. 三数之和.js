// https://leetcode-cn.com/problems/3sum/

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
          let tmpSortStr = tmpResult.sort().join('');
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

// console.log(threeSum([-1, 0, 1, 2, -1, -4]))


/* 哈希表法 */
let threeSum2 = function(nums) {
  let res = []
  nums.sort()
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) // 第一个数大于0 后面不会 ==0
      continue
    if (nums[i] === nums[i - 1]) // 用过了 去重
      continue
    let target = 0 - nums[i]
    let map = new Map()
    for (let j = i + 1; j < nums.length; j++) {
      // if (res.length) { // 去重处理
      //   let top = res[res.length - 1]
      //   if (top[1] === target - nums[j] && top[2] === nums[j]) {
      //     continue
      //   }
      // }
      if (map.has(nums[j])) {
        res.push([nums[i], map.get(nums[j]), nums[j]])
      }
      // 第一次跑
      map.set(target - nums[j], nums[j])
    }
  }
  return res
}
// [ -4, -1, -1, 0, 1, 2 ]

// console.log(threeSum2([-1, 0, 1, 2, -1, -4]))
// console.log(threeSum2([-1, 0, 1, 2, -1, -4]))


let test3 = (nums) => {
  let res = []
  nums.sort((a, b) => a - b) // 排序 方便去重
  if (nums[0] > 0) return [] // 特殊判断
  const len = nums.length
  for (let i = 0; i < len; i++) {
    if (nums[i] === nums[i - 1]) continue // 去重处理
    let target = 0 - nums[i]
    let map = new Map()
    for (let j = i + 1; j < len; j++) {
//   去重
      if (res.length) {
        const top = res[res.length - 1] // 每次取到最后一个数组
        if (top[1] === target - nums[j] && top[2] === nums[j]) continue
      }
      if (map.has(nums[j])) {
        res.push([nums[i], map.get(nums[j]), nums[j]])
      }
      map.set(target - nums[j], nums[j])
    }
  }
  return res


}
// console.log(test3([-1, 0, 1, 2, -1, -4]))

/* 双指针 */
// 题目要求返回的是元素本身 所以 可以排序
test3 = (nums) => {
  const len = nums.length
  const res = []
  if (len < 3) return []
  nums.sort((a, b) => a-b)
  if (nums[0] > 0) return []
  for (let i = 0; i < len; i++) {
    if (i && nums[i] === nums[i - 1]) continue // 去重处理
    let target = nums[i]
    let right = len - 1, left = i + 1
    while (left < right) {
      if (nums[left] + nums[right] + target === 0) {
        res.push([nums[left], nums[right], target])
        // 去重
        while (nums[left] === nums[left - 1]) {
          left++
        }
        while (nums[right] === nums[right + 1]) {
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
// console.log(test3([-1, 0, 1, 2, -1, -4]))
// console.log(test3([0, 0, 0]))
console.log(test3([-1,0,1,2,-1,-4,-2,-3,3,0,4]))
// [
// [-4,0,4]    [ 0, 4, -4 ],
// [-4,1,3]   [ 1, 3, -4 ]
// [-3,-1,4]
// [-3,0,3]   [ 0, 3, -3 ],
// [-3,1,2]   [ 1, 2, -3 ],
// [-2,-1,3]
// [-2,0,2]   [ 0, 2, -2 ],
// [-1,-1,2]  [ -1, 2, -1 ],
// [-1,0,1]  [ 0, 1, -1 ],
// ]
