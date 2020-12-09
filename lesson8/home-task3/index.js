'use strict'

function getKeys (obj){
  return (Object.keys(obj).forEach(el =>console.log(el)));
}

const user = {
  name: 'Tom',
  age: 17,
};
getKeys(user);