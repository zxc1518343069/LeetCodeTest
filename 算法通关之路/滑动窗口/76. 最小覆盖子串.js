// https://leetcode-cn.com/problems/minimum-window-substring/
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let l = 0
  let r = 0
  // 记录左右字符串index位置

  let res = ''

  const map = new Map() // 建立一个映射。先把t中所出现的字符 和次数统计出来

  // 统计 出现字符和 出现次数
  for (let i = 0; i < t.length; i++) {
    map.set(t[i], map.get(t[i]) ? map.get(t[i]) + 1 : 1)
  }

  // 统计 总共有多少个字符
  let tSize = map.size

  while (r < s.length) { // 开始便利S 字符串
    let c = s[r]

    // 判断当前字符是不是在t 里面
    if (map.has(c)) {
      map.set(c, map.get(c) - 1)
      if (map.get(c) === 0) tSize -= 1 // 如果字符出现次数为0  则 总字符出 -1
    }

    while (tSize === 0) { // 当总字符为0时 证明 所以字符已经在这 前面出现完毕了
      let newRes = s.substring(l, r + 1) // 截取字符
      if (!res || newRes.length < res.length) res = newRes // 更新结果
      //让left 开始进行移动
      let c2 = s[l]
      if (map.has(c2)) { // 判断出现过 让字符数 + 回去
        map.set(c2, map.get(c2) + 1)
        //  最重要的一步 跳出循环的关键。 让r 继续查找 为什么是1  是表明 字符次数出现完之后
        if (map.get(c2) === 1) tSize += 1
      }
      l++
    }
    r++// 一直移动
  }
  return res
}

//"BANC"
console.log(minWindow(s = 'ADOBECODEBANC', t = 'ABC'))
