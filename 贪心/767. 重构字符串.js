// https://leetcode-cn.com/problems/reorganize-string/
/**
 * @param {string} S
 * @return {string}
 */


let reorganizeString = function(S) {
  /* 小于2 直接返回*/
  if (S.length < 2) return ""
  /* 获取字母的 ascII 值*/
  const getIdx = (c) => c.charCodeAt() - 'a'.charCodeAt();
  /* 转换成字符 */
  const getAlpha = (c) => String.fromCharCode(c);
  /* 桶 计数*/
  let letterArr = new Array(26).fill(0)
  for (let c of S) {
    letterArr[getIdx(c)]++
  }
  /* 获取最大值。如果大于1/2 则必重叠*/
  let maxCount = Math.max(...letterArr)
  if (maxCount > (S.length + 1)>>1) return ""
  if (maxCount === 1 ) return S
  /*  开始创建新得字符串  */
  let oddNumber = 1 // 奇数
  let evenNumber = 0 // 偶数
  let halfLen = S.length >>1
  let len = S.length
  let newS = new Array(S.length)

  for (let i = 0; i < 26; i++) {
    let c = getAlpha('a'.charCodeAt() + i)
    while (letterArr[i] > 0 && letterArr[i] <= halfLen && oddNumber < len){
      newS[oddNumber] = c
      oddNumber += 2
      letterArr[i]--
    }
    while (letterArr[i] > 0){
      newS[evenNumber] = c
      evenNumber += 2
      letterArr[i]--
    }
  }

  return newS.join('')
}

//"aba"
console.log(reorganizeString("aab"))
console.log(reorganizeString("abcdeff"))
