'use strict'

function pickProps (obj, arr){
  let obj2 = {};
  for (let key in obj) {
      if (arr.includes(key)) {
        obj2[key] = obj[key];
      }
  }
  return obj2;
}



//{ a: 1, b: 2, c: 3 }, ['a', 'c']
const obj = {
  a: 1, 
  b: 2, 
  c: 3
}

const arr = ['a', 'c'];

console.log(pickProps(obj,arr));