let combine = function(n, k) {
  let res = []
  function dfs(ans,i){
    if(ans.length === k)
      res.push([...ans]);
    for(i;i <= n;i++){
      ans.push(i);
      dfs(ans,i+1);
      ans.pop();
    }
  }
  dfs([],1)
  return res
};
console.log(combine(2,2))
