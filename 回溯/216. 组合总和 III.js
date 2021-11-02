let combinationSum3 = function(k, n) {
  let res = []
  let sum = 0

  function dfs(ans, i) {
    console.log(ans)
    console.log(sum)
    if (ans.length === k && sum === n) {
      res.push([...ans])
    }
    if (ans.length >= k || sum > n) return
    for (let j = i; j <= 9; j++) {
      if (ans.length < k || sum < n) {
        if (j <= n) {
          ans.push(j)
          sum += j
          dfs(ans, j + 1)
          sum -= ans.pop()
        }
      }
    }
  }

  dfs([], 1)
  return res
};
console.log(combinationSum3(3, 9))

