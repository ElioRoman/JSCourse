function getCustomersList (arr){
    const goArr = Object.entries(arr);
    console.log(goArr);
    const s = goArr.map(item => Object.entries(item[1]).flat());
    console.log(s);
}



const customers = {
    'customer-id-1': {
        name: 'William',
        age: 54
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17
    },
  
}
console.log(getCustomersList(customers));
//result

//     {
//         name: 'Tom',
//         age: 17,
//         id: 'customer-id-2'
//     },     
//     {
//         name: 'William',
//         age: 54,
//         id: 'customer-id-1'
//     },
//     ...
// ]

//1. 