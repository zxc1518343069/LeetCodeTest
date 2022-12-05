// https://leetcode-cn.com/problems/non-overlapping-intervals/

let eraseOverlapIntervals = function(intervals) {
  intervals.sort((a,b)=> a[1]-b[1])
  console.log(intervals)
  let flag = -Infinity
  let sum = 0
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] >= flag){ // 起点大于终点
      flag = intervals[i][1]
    }else {
      sum++
    }
  }
  return sum
};
//    [ [ 1, 2 ], [ 2, 3 ], [ 1, 3 ], [ 3, 4 ] ]
console.log(eraseOverlapIntervals([ [1,2], [2,3], [3,4], [1,3] ]))
