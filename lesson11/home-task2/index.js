'use strict'
const countOccurrences = (text,subtext) =>{
    if (subtext===''){
        return null; 
    }

    let pos = 0;
    let count = 0;
    let found = 0;
    
    while (true){
        found = text.indexOf(subtext,pos);
        if (found === -1){
            break;
        }
        pos =1+found;
        count++;
    }
    return count;
}
console.log(countOccurrences('112233445511','2'));