// 思路。   回溯算法

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let combinationSum2 = function(candidates, target) {
  let ans = [] // 存放答案的数组
  let tmp = [] // 存放每次读取数据的数组
  function dfs(index, sum) {
    // console.log(tmp)
    if (sum === target) {
      ans.push([...tmp])
      return
    }
    if (sum > target) {
      return
    }
    for (let i = index; i < candidates.length; i++) {
      if (sum > target)
        return
      if (i > index && candidates[i] === candidates[i - 1])
        continue
      tmp.push(candidates[i])
      dfs(i + 1, sum + candidates[i])
      tmp.pop()
    }
  }

  dfs(0, 0)
  return ans
};

// 2021 11 06
// 题目信息 找到所有组合  dfs
// 对比39 题 改动点在于 if 判断条件的不同 和多了一的deep参数 用来判断
// deep的作用  判断走到了数组的第几个
combinationSum2 = (candidates, target) => {
  candidates.sort((a,b)=>a-b)
  let res = [],
      tmp = [], // 用于存放数据
      len = candidates.length
  const dfs = (sum, deep) => {
    // 结束条件
    if (sum === target)
      return res.push([...tmp])
    if (sum > target)
      return

    for (let i = deep; i < len; i++) {
      if (candidates[i] > target) return
      if (i > deep && candidates[i] === candidates[i - 1]) {
        // i >deep 保证能被添加一次
        // candidates[i] === candidates[i - 1] 去重作用
        continue
      }
      tmp.push(candidates[i])
      dfs(sum + candidates[i], i + 1)
      tmp.pop()
    }
  }
  dfs(0, 0)
  return res
}

console.log(combinationSum2([2, 5, 2, 1, 2], 5))  //[ [ 1, 2, 2 ], [ 5 ] ]
