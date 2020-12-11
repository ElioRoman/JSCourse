'use strict'
// input: num,num,num
// output: array

const mathRandom = (from, to) => 
    Math.random() * (to - from) + from;

//console.log(mathRandom(1,50));
const chooseMethod = (start,end) =>
    end - start < 1 
    ? Math.floor 
    : Math.ceil;
//console.log(chooseMethod(3,2));
const getRandomNumbers = (length, start, end) =>{
    if (Math.abs(end - start)<1) {
        return null;
    }
    let result = [];
    for (let i=0; i<length; i++){ 
        result.push(chooseMethod(start,end)(mathRandom(start,end)));
       }      
    return result;
}

 console.log (getRandomNumbers(10,-9,9));