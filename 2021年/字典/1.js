function findValueByPath(obj,path){
  const pathList = path.split('.')
  if (!pathList.length) return
  let res = obj
  const len = pathList.length
  for(let i=0;i<len ;i++){
    if(res[pathList[i]]){
      res = res[pathList[i]]
    }
  }
  return res
}
const obj = {
  info: {
    name: 'n',
    age: 1,
  }
}
console.log(findValueByPath(obj,'info.name'))
