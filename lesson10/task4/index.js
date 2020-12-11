'use strict'
//input: array
//output: number
//function getMaxAbsoluteNumber (arr){
    // let max = -Infinity;
    // arr.forEach(el => {
    //     if (Math.abs(el)>max){
    //         max = Math.abs(el);
    //     }
    // });
    //retrun max;
//}

const getMaxAbsoluteNumber = arr =>{
    if(!Array.isArray(arr) || arr.length === 0){
        return null;
    }
    const absolutValues = arr
        .map(num => Math.abs(num));
    const max = Math.max (...absolutValues);

    return max;
}
console.log (getMaxAbsoluteNumber(11));