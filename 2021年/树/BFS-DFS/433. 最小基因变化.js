// https://leetcode-cn.com/problems/minimum-genetic-mutation/

let minMutation = function(start, end, bank) {
  if (start === end) return 1
  if (!bank.includes(end))return -1
  let list = ["A", "C", "G", "T"]
  let set = new Set(bank)
  let queue = [[start,0]]

  while (queue.length){
    let [word,level] = queue.shift()
    /* 终止条件*/
    if (word === end) return level

    for (let i = 0; i < word.length; i++) {
      for (let j = 0; j < list.length; j++) {
        let tmp = word.slice(0,i) + list[j] + word.slice(i+1)
        if (set.has(tmp)){
          queue.push([tmp,level+1])
          console.log(queue)
          set.delete(tmp)
        }
      }
    }
  }

  return -1


};

// 1
// console.log(minMutation('AACCGGTT', 'AACCGGTA', ['AACCGGTA']))
console.log(minMutation('AACCGGTT', 'AAACGGTA', ["AACCGGTA", "AACCGCTA", "AAACGGTA"]))
console.log(minMutation('AAAAACCC', 'AACCCCCC', ["AAAACCCC", "AAACCCCC", "AACCCCCC"]))
