import {reverseArray} from './index';

it ('cheking input', () =>{
    const result = reverseArray('1, 2, 3, 4, 5');
    expect(result).toEqual(null);
})

it ('cheking reverse', () =>{
    const result = reverseArray([1, 2, 3, 4, 5, 6]);
    expect(result).toEqual([6, 5, 4, 3, 2, 1]);
})

it ('does not match if received does not contain expected elements', () =>{
    const result = reverseArray([1, 2, 3, 4, 5, 6]);
    expect([7, 8, 9, 10]).not.toEqual(expect.arrayContaining(result));
})

