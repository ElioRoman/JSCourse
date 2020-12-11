'use strict'

//splitString('abcd efgh', 4) => 'Abcd\n efg\nH...']

const splitText = (text,len=10) =>{
    if (typeof(text)!=='string'){
        return null;
    }
    const strArr = [];
    let startPosition = 0;
    while(true){
        let chuck = text.substr(startPosition,len);
        if (chuck.length === 0){
            break;
        }
        strArr.push(chuck[0].toUpperCase() + chuck.slice(1));
        startPosition += len;
        
    }
    return strArr.join('\n');
}

console.log(splitText(5,2));