// https://leetcode-cn.com/problems/word-ladder/

/* bfs*/
let ladderLength = function(beginWord, endWord, wordList) {

  /* 判断 endWord 不存在的条件*/
  if (!endWord || wordList.indexOf(endWord) === -1) {
    return 0;
  }
  let wordSet = new Set(wordList)
  let queue = [[beginWord, 1]]
  /* 判断存在条件*/
  while (queue.length) {
    /* 结束条件*/
    let [word, level] = queue.shift()
    if (word === endWord) return level
    for (let i = 0; i < word.length; i++) {
      for (let c = 97; c < 123; c++) {
        /* 形成一个新的单词*/
        let newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1)
        if (wordSet.has(newWord)) {
          queue.push([newWord, level + 1])
          wordSet.delete(newWord)
        }
      }
    }
  }
  return 0
};



/* 双端bfs */


let ladderLength2 = function(beginWord, endWord, wordList) {

  /* 判断 endWord 不存在的条件*/
  if (!endWord || wordList.indexOf(endWord) === -1) {
    return 0;
  }
  let wordSet = new Set(wordList)
  let frontQueue = [[beginWord, 1]]
  let endQueue = [[endWord,1]]

  /* 判断存在条件*/
  while (frontQueue.length && endQueue.length) {
    /* 始终保持短的一方 */
    if (frontQueue.length > endQueue.length) {
      [frontQueue, endQueue] = [endQueue, frontQueue]
    }
    /* 结束条件*/
    let [word, level] = frontQueue.shift()

    let len = word.length
    for (let i = 0; i < len; i++) {
      for (let c = 97; c < 123; c++) {
        /* 形成一个新的单词*/
        let newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1)
        const index = endQueue.findIndex(item => item[0] === newWord)
        if (index !== -1) { // 这里不需要判断newWord是否在wordList中，因为endQueue中存在的单词必定在wordList中
          return endQueue[index][1] + level
        }
        if (wordSet.has(newWord)) {
          frontQueue.push([newWord, level + 1])
          wordSet.delete(newWord)
        }
      }
    }
  }
  return 0
};


/* 双端bfs  优化*/
let ladderLength3 = function(beginWord, endWord, wordList) {

  /* 判断 endWord 不存在的条件*/
  if (!endWord || wordList.indexOf(endWord) === -1) {
    return 0;
  }
  let wordSet = new Set(wordList)
  let frontQueue = [[beginWord, 1]]
  let endQueue = new Map([[endWord, 1]])
  console.log(endQueue)

  /* 判断存在条件*/
  while (frontQueue.length && endQueue.size) {
    /* 始终保持短的一方 */
    if (frontQueue.length > endQueue.size) {
      [frontQueue, endQueue] = [Array.from(endQueue), new Map(frontQueue)]
    }
    /* 结束条件*/
    let len = frontQueue.length

    for (let k = 0; k < len; k++) {
      let [word, level] = frontQueue.shift()
      let len = word.length
      for (let i = 0; i < len; i++) {
        for (let c = 97; c < 123; c++) {
          /* 形成一个新的单词*/
          let newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1)
          if (endQueue.has(newWord)){
            return endQueue.get(newWord) + level
          }
          if (wordSet.has(newWord)) {
            frontQueue.push([newWord, level + 1])
            wordSet.delete(newWord)
          }
        }
      }
    }
  }
  return 0
};

console.log(ladderLength3(
    beginWord = 'hit',
    endWord = 'cog',
    wordList = ['hot', 'dot', 'dog', 'lot', 'log', 'cog']
))

console.log(ladderLength3(
    beginWord = 'hit',
    endWord = 'cog',
    wordList = ['hot', 'dot', 'dog', 'lot', 'log']
))
