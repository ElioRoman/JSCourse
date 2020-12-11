const obj = [
    { userId: 22, amount: 60, operation: 'sell' },
    { userId: 22, amount: 160, operation: 'buy' },
    { userId: 44, amount: 90, operation: 'sell' },
];
//const result = getTotalBalance(dayTransactions);
// result = 310

function getTotalRevenue (arr){
    //option_1
    // return arr.map(item => Object.entries(item)).map(item => item[1])
    // .map(item => item[1])
    // .reduce((a, b) => a + b);

    //option_2
    return arr.reduce((acc, item) => {
      return acc+item.amount;
    },0);
}

console.log(getTotalRevenue(obj))