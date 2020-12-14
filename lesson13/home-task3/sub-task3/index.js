//put your code here
"use strict"

export const getAdults = obj =>{
  let obj2 = {};
  for (let key in obj) {
    if (obj[key] >= 18) {
      obj2[key] = obj[key];
      }
  }
  return obj2;
}