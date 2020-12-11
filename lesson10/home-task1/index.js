'use strict'
//input: arr
//output: string
function getTotalPrice (arr){
    const sum = Math.floor(arr.reduce((acc, el) => (acc + el))*100)/100;
    return ('$' + sum);
}
