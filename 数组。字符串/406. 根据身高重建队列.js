// https://leetcode-cn.com/problems/queue-reconstruction-by-height/

//[5,0] [5,1] [4,2]

let reconstructQueue = function(people) {
  let ans=[];
  if(!people||!people.length){return []}
  people.sort((a,b)=>{
    if(a[0]===b[0]){
      return a[1]-b[1]
    }else{
      return b[0]-a[0]
    }
  })

  people.forEach(item=>{
    ans.splice(item[1],0,item)
    console.log(ans)
  })
  return ans;
};


// [ [ 7, 0 ], [ 7, 1 ], [ 6, 1 ], [ 5, 0 ], [ 5, 2 ], [ 4, 4 ] ] 排序后


// [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
console.log(reconstructQueue([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]))
