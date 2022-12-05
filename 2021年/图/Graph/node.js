export default (value) => {
  let enter = 0, // 有多点指向它 ( 有向图)
      out = 0, // 它指向多少点 ( 有向图)
      nextList = [], // 相邻点的集合
      edgeList = [] // 相邻边的集合
  return {
    value,
    enter,
    out,
    nextList,
    edgeList
  }
}
