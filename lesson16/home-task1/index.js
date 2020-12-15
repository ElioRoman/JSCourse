"use strict";

const createArrayOfFunctions = (num) => {
  let arr = [];
  
  if (num == undefined) return arr;
  if (!Number.isInteger(num)) return null;
  
  for (let i = 0; i < num; i++) {
    arr[i] = function () {
      return i;
    };
  }

  return arr;
};

console.log(createArrayOfFunctions(9)[5]());