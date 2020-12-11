'use strict'

const splitString = (text,num=10) =>{
    if (typeof(text)!=='string'){
        return null;
    }
    const strArr = [];
    let startPosition = 0;
    while(true){
        let chuck = text.substr(startPosition,num);
        if (chuck.length === 0){
            break;
        }
        if (chuck.length < num){
            chuck = chuck + '.'.repeat(num - chuck.length)
        };
        startPosition += num;
        strArr.push(chuck);
    }
    return strArr;
}

console.log(splitString(1, 4));