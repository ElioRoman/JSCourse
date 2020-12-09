const rooms = {
    room1: [
        { name: 'room1 name1' },
        { name: 'room1 name2' },
        { name: 'room1 name3' },
        { name: 'room1 name4' },
        
    ],
    room2: [
        { name: 'room2 name1' },
        
    ],
    room3: [
        { name: 'room3 name1' },
        { name: 'room3 name2' },
        { name: 'room3 name3' },
        
    ],
    
};

function getPeople (obj){
    const step1 = Object.entries(obj);
    //console.log(step1);
    const step2 = step1.map(item => item[1]).flat();
    //console.log (step2);
    const step3 = step2.map(item => Object.values(item)).flat();
    // console.log(step3);
    return step3;
}
console.log(getPeople(rooms))