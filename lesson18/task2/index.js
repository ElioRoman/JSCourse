'use strict'

export const wallet = {
    transaction: [1, 5, 89, 337, 3],
    getMax(){
        return Math.max.apply(null, this.transaction);
    },
    getMin(){
        return Math.min.apply(null, this.transaction);
    }
}

console.log(wallet.getMax());
console.log(wallet.getMin());