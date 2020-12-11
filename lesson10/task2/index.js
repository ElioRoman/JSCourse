'use strict'

const getParsedIntegers = arr => {
    return arr.map(el => Number.parseInt(el));
}

const getParsedIntegersV2 = arr => {
    return arr.map(el => parseInt(el));
}

const getParsedFloats = arr => {
    return arr.map(el => Number.parseFloat(el));
}

const getParsedFloatsV2 = arr =>{
    return arr.map(el => parseFloat(el));
}

const arr = [1, '2', 1.88, '  12lk', undefined, null, NaN, Infinity];
console.log (getParsedFloatsV2(arr));