// https://leetcode-cn.com/problems/build-an-array-with-stack-operations/

/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
let buildArray = function(target, n) {
  let len = target.length
  let res = []
  // let index = 1
  for (let i = 1; i <= n && i <= target[len - 1]; i++) {
    if (target.includes(i)){
      res.push('Push')
    }else{
      res.push('Push')
      res.push('Pop')
    }
  }


  // while(target.length){
  //     if (target.includes(index)){
  //       res.push('Push')
  //       target.shift()
  //     }else{
  //       res.push('Push')
  //       res.push('Pop')
  //     }
  //     index++
  // }
  return res
};

// ["Push","Push","Pop","Push"]
console.log(buildArray(target = [1,3], n = 3))

//["Push","Push","Push"]
console.log(buildArray(target = [1,2,3], n = 3))

    // ["Push","Push"]
console.log(buildArray(target = [1,2], n = 4))

    // ["Push","Pop","Push","Push","Push"]
console.log(buildArray(target = [2,3,4], n = 4))
