import {withdraw} from './index';

it ('cheking result', () =>{
    const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
    expect(result).toEqual(37);
});

it ('get use name', () => {
    expect('Ann').not.toBe('Bob');
});

it('passes when value is NaN', () => {
    expect(NaN).toBeNaN();
    expect(1).not.toBeNaN();
});




