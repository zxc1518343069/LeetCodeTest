// let subsets = function(nums) {
//   let res = []
//   let length = nums.length
//   let dfs = (arr,index)=>{
//     if (index === length) return res.push([...arr])
//     dfs(arr,index +1 )
//     arr.push(nums[index])
//     dfs(arr,index +1 )
//     arr.pop()
//   }
//   dfs([],0)
//   return res
// };
// 终止程序
// 拆分您的大问题
// 向下钻取（子问题）
// 合并（子结果）
// 反向状态

/*
* 递归
* */
// let subsets = function(nums) {
//   let res = []
//   let num = nums.length
//
//   let dfs = (arr,deep)=>{
//     /* 终止条件 */
//     if (deep === num)
//       return res.push([...arr])
//
//     /* 问题拆分 先放入的是3*/
//     dfs(arr,deep+1)
//     arr.push(nums[deep])
//     dfs(arr,deep+1)
//     arr.pop()
//   }
//   dfs([],0)
//
//   return res
// };


/*
* 迭代
* */


let subsets = function(nums) {
  let res = [[]]
  for (let i = 0; i < nums.length; i++) {
    let tmp = []


  }

  return res
};

console.log(subsets([1,2,3]))
