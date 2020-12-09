const concatProps = obj =>{
    let arr = [];

    for (let key in obj) {
        arr.push(obj[key]);
        //arr = arr.concat(obj[key]);
    }
    
    return arr;
};

const user = {
    name: 'Tom',
    age: 17,
}
console.log(concatProps(user));