// let permute = function(nums) { //  排列树 oN*N
//   let res = []
//   let length = nums.length
//   let dfs = (tmp)=>{
//     if (tmp.length === nums.length){
//       return res.push([...tmp])
//     }
//     for (let i = 0; i < length; i++) {
//       if (tmp.includes(nums[i])) continue
//       tmp.push(nums[i])
//       dfs(tmp)
//       tmp.pop()
//     }
//   }
//   dfs([],0)
//   return res
// };
// console.log(permute([1,2,3]))

// [ 1, 2, 3 ],
// [ 1, 3, 2 ],
// [ 2, 1, 3 ],
// [ 2, 3, 1 ],
// [ 3, 1, 2 ],
// [ 3, 2, 1 ]


// let permute = function(nums) { //  排列树 O N!
//   let length = nums.length
//   let res = []
//
//   let dfs = (deep)=>{
//     if (deep >= length) {
//       return res.push([...nums])
//     } else {
//       for (let i = deep; i < length; i++) {
//         let s = nums[deep]
//         nums[deep] = nums[i]
//         nums[i] = s
//         dfs(deep + 1)
//         let d = nums[deep]
//         nums[deep] = nums[i]
//         nums[i] = d
//       }
//     }
//   }
//   dfs(0)
//   res = [...new Set()]
//   return res
// };



let permute = function(nums) { //  排列树 O N!
  let res = []
  let used={}

  let dfs = (path)=>{
    if (path.length === nums.length){
      return res.push([...path])
    }
    for (const num of nums) {
      if (used[num]) continue
      used[num] = true
      path.push(num)
      dfs(path)
      path.pop()
      used[num] = false
    }
  }
  dfs([])
  return res
};
console.log(permute([1, 2, 3]))
