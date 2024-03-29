// 思路。   回溯算法

/*
* 1.  返回的是一个数组，需要用 一个数组存储答案，一个数组 存放测试数据
* 2.  遍历这个 candidates  把它放到测试数组里，让sum+这个值
* 3.  再次进行dfs  原因。需要遍历所有情况
* 4.  最后 如果不满足  sum -= tmp.pop()   从新开始下一种情况
* 5.  需要考虑重复数据。因为给的事无重复元素。所以下一个元素一定比上一个元素大，
* 6.  存在一个特例，即7本身。 所以  要考虑 tmp为0的情况
* */

let combinationSum = function(candidates, target) {
  let ans = [] // 存放答案的数组
  let tmp = [] // 存放每次读取数据的数组
  function dfs(sum) {
    if (sum === target) {
      ans.push([...tmp])
      return
    }
    if (sum > target)
      return
    for (let i = 0; i < candidates.length; i++) {
      if (tmp.length === 0 || candidates[i] >= tmp[tmp.length - 1]) {
        tmp.push(candidates[i])
        sum += candidates[i]
        dfs(sum)
        sum -= tmp.pop()
      }
    }
  }

  dfs(0)
  return ans
};


// 2021 11.06
combinationSum = (candidates, target) => {

  let res = [],
      tmp = [], // 用于存放数据
      len = candidates.length
  const dfs = (sum) => {
    // 结束条件
    if (sum === target)
      return res.push([...tmp])
    if (sum > target)
      return

    for (let i = 0; i < len; i++) {
      if (tmp.length === 0 || candidates[i] >= tmp[tmp.length - 1]) { // 去重 保证一个数不会被取多次
        tmp.push(candidates[i])
        sum += candidates[i]
        dfs(sum)
        sum -= tmp.pop()
      }
    }


  }

  dfs(0)
  return res
}
console.log(combinationSum([2, 3, 6, 7], 7))
