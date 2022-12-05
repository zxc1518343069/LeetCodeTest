/**
 * @param {number[][]} points
 * @return {number}
 */
let findMinArrowShots = function(points) {
  if (!points.length) return 0

  points.sort((a, b)=>a[1]-b[1])
  console.log(points)
  let pot = points[0][1]
  let res = 1
  for (let point of points) {
    if (point[0] > pot){
      pot = point[1]
      res++
    }
  }

  return res
};
// 2

console.log(findMinArrowShots(points = [[10,16],[2,8],[1,6],[7,12]]))
