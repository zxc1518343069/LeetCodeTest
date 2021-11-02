// https://leetcode-cn.com/problems/4sum-ii/

let fourSumCount = function(A, B, C, D) {
  const sumMap = new Map()
  // 遍历A和B
  for (let a of A) {
    for (let b of B) {
      // 将a跟b的和出现的次数存到sumMap里
      const sum = a + b
      sumMap.has(sum) ? sumMap.set(sum, sumMap.get(sum) + 1) : sumMap.set(sum, 1)
    }
  }
  let count = 0
  // 遍历C和D
  for (let c of C) {
    for (let d of D) {
      // 判断c跟d的和的负值是否存在于sumMap中，存在的话则计数增加
      const sum = c + d
      if (sumMap.has(-sum)) {
        count += sumMap.get(-sum)
      }
    }
  }
  return count
};
console.log(fourSumCount(A = [1, 2], B = [-2, -1], C = [-1, 2], D = [0, 2]))
