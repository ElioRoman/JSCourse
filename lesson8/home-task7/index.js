"use strict"

function getAdults (obj){
  let obj2 = {};
  for (let key in obj) {
    if (obj[key] >= 18) {
      console.log (obj[key]);
      obj2[key] = obj[key];
      }
  }
  return obj2;
}

const obj ={ 'John Doe': 19, 'Tom': 17, 'Bob': 18 };
console.log (getAdults(obj))