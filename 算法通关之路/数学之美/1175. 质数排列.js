/**
 * @param {number} n
 * @return {number}
 */

// 质数排序 = 质数全排列 * 非质数全排列 = 2！ * 3! = 12
var numPrimeArrangements = function(n) {
  const factorial = (n) => {
    let res = BigInt(1)
    for (let i = 1; i <= n; i++) {
      res *= BigInt(i)
    }
    return res
  }
  // n<100
  const tmp = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
  let PrimeNumber = 0
  while (tmp[PrimeNumber] <= n) PrimeNumber++

  return Number(factorial(PrimeNumber) * factorial(n - PrimeNumber) % BigInt(10 ** 9 + 7))
};


console.log(numPrimeArrangements(5)) // 12
console.log(numPrimeArrangements(2)) // 12
console.log(numPrimeArrangements(100)) // 682289015
