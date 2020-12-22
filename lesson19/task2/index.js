export function getOwnProps(obj) {
  const propArr = [];
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function') {
      propArr.push(prop);
    }
  }
  return propArr;
}

const vehicle = {
  name: 'Argo',
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};
console.log(getOwnProps(vehicle));
