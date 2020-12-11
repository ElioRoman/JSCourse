'use strict'
//input: number, number
//output: array
function superRound (item, multi) {
 return   [
        Math.floor(item * Math.pow(10,multi)) / Math.pow(10,multi),
        Math.round(item * Math.pow(10,multi)) / Math.pow(10,multi),
        Math.ceil (item * Math.pow(10,multi)) / Math.pow(10,multi),
        Math.trunc(item * Math.pow(10,multi)) / Math.pow(10,multi),
        + item.toFixed(multi)
    ];
}

console.log (superRound(-17.1234551, 4));