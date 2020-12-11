'use strict'
//input: number
//output: array
function multiRound (item) {
 return   [
        Math.floor(item * 100) / 100,
        Math.round(item * 100) / 100, 
        Math.ceil(item * 100) / 100, 
        Math.trunc(item * 100) / 100, 
        + item.toFixed(2)
    ];
}

console.log (multiRound(-17.1234551));