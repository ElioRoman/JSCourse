'use strict'
const reverseString = text => {
    if (typeof(text) !== 'string'){
        return null;
    }
    return text.split('').reverse().join('');
}

console.log(reverseString('2345'));