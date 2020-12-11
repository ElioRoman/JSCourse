// Number.isNaN('text'); = false
// isNaN('text'); = true 
// isNaN(NaN); = true
// Number.isNaN(NaN); = true

// Number.isFinite('17'); = false
// isFinite('17'); = true

// parseInt (' 17.17text'); = 17
// Number.parseInt(' 17.17text'); = 17
// Number.parseInt('seventeen'); = NaN

// parseFloat (' 17.17text'); =17.17
// Number.parseFloat(' 17.17text'); =17.17
// Number.parseFloat('seventeen');= NaN

// Number.isInteger(17); = true
// Number.isInteger(17.0); = true
// Number.isInteger(17.17); = false
// Number.isInteger('17'); = false
// Number.isInteger(Infinity); = false
// Number.isInteger(NaN); = false
// Number.isInteger(undefined); = false
// Number.isInteger(null); = false

"use strict"

function getFiniteNumbers(arr) {
    return arr.filter(item => Number.isFinite(item));
  }

function getFiniteNumbersV2 (arr) {
    return arr.filter(item => isFinite(item));
}

function getNaN (arr){
    return arr.filter(item => Number.isNaN(item));
}

function getNaNV2 (arr){
    return arr.filter(item => isNaN(item));
}

function getIntegers (arr){
    return arr.filter(item => Number.isInteger(item));
}
