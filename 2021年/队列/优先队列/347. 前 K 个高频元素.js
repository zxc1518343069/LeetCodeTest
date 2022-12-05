// https://leetcode-cn.com/problems/top-k-frequent-elements/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
let topKFrequent = function(nums, k) {
  let map = new Map()
  let arr = [...new Set(nums)]

  nums.map(item=>{
    if (map.has(item)) {
      map.set(item, map.get(item) + 1)
    } else {
      map.set(item, 1)
    }
  })

  return arr.sort((a, b)=>
      map.get(b) - map.get(a)
  ).slice(0,k)
};
// [1,2]
console.log(topKFrequent(nums = [1, 1, 1, 2, 2, 3], k = 2))
