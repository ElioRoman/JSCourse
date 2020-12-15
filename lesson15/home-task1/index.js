export const createCalculator = () => {
    // put your code here
    let memory = 0;

    function add(num) {
        memory += num;
    }

    function decrease(num) {
        memory -= num;
    }

    function reset() {
        memory = 0;
    }

    function getMemo() {
        return memory;
    }

    return {add, decrease, reset, getMemo};
  };

const result = createCalculator();

console.log(result.add(6));