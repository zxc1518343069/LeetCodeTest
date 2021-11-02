// https://leetcode-cn.com/problems/valid-number/

let isNumber = (s)=>{
  const map = {
    0: { 'blank': 0, 'number': 6, 'sign': 1, '.': 2 },
    1: { 'number': 6, '.': 2 },
    2: { 'number': 3 },
    3: { 'number': 3, 'e': 4 },
    4: { 'number': 5, 'sign': 7 },
    5: { 'number': 5 },
    6: { 'e': 4, '.': 3, 'number': 6 },
    7: { 'number': 5 }
  }
  let state = 0
  for (let c of s.trim()) {
    if (c >= '0' && c <= '9') {
      c = 'number'
    }else if (c===' ') {
      c = 'blank'
    }else if (c==='+' || c==='-'){
      c='sign'
    }
    state = map[state][c]
    if (state === undefined){
      return false
    }
  }
  return state === 3 || state === 6 || state === 5;
}
