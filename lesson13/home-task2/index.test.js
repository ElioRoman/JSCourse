import {calc} from './calculator';

it ('cheking "string"', () =>{
    const result = calc();

    expect(result).toEqual(null);
})

it ('cheking the sum', () =>{
    const result = calc("1 + 3")
    expect(result).toEqual("1 + 3 = 4");
})

it ('cheking the subtration', () =>{
    const result = calc("3 - 1")
    expect(result).toEqual("3 - 1 = 2");
})


it ('cheking the multiplication', () =>{
    const result = calc("3 * 2")
    expect(result).toEqual("3 * 2 = 6");
})


it ('cheking the division', () =>{
    const result = calc("6 / 2")
    expect(result).toEqual("6 / 2 = 3");
})