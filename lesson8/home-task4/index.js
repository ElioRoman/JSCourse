'use strict'

function addPropertyV1 (obj, key, value){
    obj[key]=value;
    return obj;
}

function addPropertyV2 (obj, key, value){
  return Object.assign(obj, {[key]:value});
}

function addPropertyV3 (obj, key, value){
  return Object.assign({}, obj, {[key]:value});
  
}

function addPropertyV4 (obj, key, value){
  return Object.assign({},{...obj}, {[key]:value});
}

const user = {};
const transaction = {
  value: 170
}
const result = addPropertyV4(user, 'currency', 'USD');
 console.log(result); // { value: 170, currency: 'USD' }

