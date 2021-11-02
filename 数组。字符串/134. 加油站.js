// https://leetcode-cn.com/problems/gas-station/


let canCompleteCircuit = function(gas, cost) {

  let len = gas.length
  let start = 0
  let run = 0,rest = 0

  for (let i = 0; i < len; i++) {
    run += (gas[i] - cost[i]) //  油耗差
    rest += (gas[i] - cost[i]) // 总路程
    if (run < 0){
      start = i + 1
      run = 0
    }
  }

  return rest<0?-1:start
};

console.log(canCompleteCircuit(gas = [1, 2, 3, 4, 5], cost = [3, 4, 5, 1, 2]))
