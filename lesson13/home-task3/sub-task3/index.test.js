import {getAdults} from './index';

it ('cheking result', () =>{
    const result = getAdults({ 'John Doe': 19, 'Tom': 17, 'Bob': 18 });
    expect(result).toEqual({ 'John Doe': 19, 'Bob': 18 });
});

it ('get a property', () => {
    const result = getAdults({ 'John Doe': 19, 'Tom': 17, 'Bob': 18 });
    expect(result).toHaveProperty('Bob')
});

test('get returns', () => {
    const getAdults = jest.fn(() => true);
  
    getAdults();
  
    expect(getAdults).toHaveReturned();
  });
