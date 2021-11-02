// https://leetcode-cn.com/problems/next-greater-element-i/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
/* 暴力 */
// let nextGreaterElement = function(nums1, nums2) {
//   const len1=nums1.length,len2=nums2.length
//   for(var i=0;i<len1;i++){
//     let index=nums2.indexOf(nums1[i])
//     nums1[i]=findNext(index)
//   }
//   return nums1
//
//
//   function findNext(index){
//     for(var j=index+1;j<len2;j++){
//       if(nums2[j]>nums1[i])  {
//         return nums2[j]
//       }
//     }
//     return -1
//   }
// };

/*单调栈*/

let nextGreaterElement = function(nums1, nums2) {
  let stack = []
  let map = new Map()
  let res = []

  let len = nums2.length

  for (let i = 0; i < len; i++) {
    if (stack.length){
      while(stack.length && nums2[i] > stack[stack.length - 1]){
        map.set(stack.pop(), nums2[i])
      }
    }
    stack.push(nums2[i])
  }
  while(stack.length){
    map.set(stack.pop(), -1)
  }
  nums1.forEach(item => {
    res.push(map.get(item))
  })
  return res
};

console.log(nextGreaterElement(nums1 = [4,1,2], nums2 = [1,3,4,2]))
