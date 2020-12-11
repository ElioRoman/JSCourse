import {getMinSquaredNumber} from './getMinSquaredNumber';

it ('get empty array', () =>{
    const result = getMinSquaredNumber([]);

    expect(result).toEqual(null);
})

it ('get string', () =>{
    const result = getMinSquaredNumber("[1,2,3,4,5]")
    expect(result).toEqual(null);
})

it ('get MinSquaredNumber ABS', () =>{  
    const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20])
    expect(result).toEqual(4);
})