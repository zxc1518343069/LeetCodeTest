// https://leetcode-cn.com/problems/boats-to-save-people/
let numRescueBoats = function(people, limit) {
  if (!people.length)
    return 0
  if (people.length === 1)
    return 1
  people.sort((a,b)=>a-b)
  let num = 0
  while (people.length){
    let maxWeight = people.pop()
    if (people.length && (maxWeight + people[0]) <= limit){
      people.shift()
    }
    num++
  }
  return num
};

console.log(numRescueBoats([1,2],3))
