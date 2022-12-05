// 417. 太平洋大西洋水流问题
// https://leetcode-cn.com/problems/pacific-atlantic-water-flow/
var pacificAtlantic = function(matrix) {
  if(!matrix ||!matrix[0]){
    return []
  }

  const m = matrix.length // 长
  const n = matrix[0].length // 宽

  const flow1 = Array.from({length:m},()=>new Array(n).fill(false))
  const flow2 = Array.from({length:m},()=>new Array(n).fill(false))

  const dfs=(r,c,flow)=>{
    flow[r][c] = true;
    [[r-1,c],[r+1,c],[r,c-1],[r,c+1]].forEach(([nr,nc])=>{
      // 保证在矩阵中
      if(nr>=0 && nr <m &&nc>=0 && nc <n && !flow[nr][nc]
          // 逆流而上
          &&matrix[nr][nc] >=matrix[r][c]
      ){
        dfs(nr,nc,flow)
      }
    })
  }
  // 开始进行流动
  for(let i = 0;i<m;i++){
    dfs(i,0,flow1) // 上海岸线
    dfs(i,n-1,flow2) // 下海岸线
  }
  console.log(flow1)
  console.log(flow2)
  for(let i = 0;i<n;i++){
    dfs(0,i,flow1) // 做海岸线
    dfs(m-1,i,flow2) // 右海岸线
  }
  // 收集坐标
  console.log(flow1)
  console.log(flow2)

};
pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]])
