// https://leetcode-cn.com/problems/count-primes/

/*暴力*/

let countPrimes = function(n) {

  let isPrimes = (n)=>{
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false
    }
    return true
  }

  let res = 0
  for (let i = 2; i < n; i++) {
    isPrimes(i) && res++
  }
  return res
};

let countPrimes2 = function(n) {

  let isPrimes = (n)=>{
    for (let i = 2; i*i <= n; i++) {
      if (n % i === 0) return false
    }
    return true
  }

  let res = 0
  for (let i = 2; i < n; i++) {
    isPrimes(i) && res++
  }
  return res
};


console.log(countPrimes2(10))


/* 优化
* 1.  1 * 2    根号2 * 根号2
*
* */
