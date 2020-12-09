const copyObj = obj =>{
    return Object.assign({}, obj);
}

const user = {
    name: 'Tom',
    age: 17,
}
console.log(copyObj(user));