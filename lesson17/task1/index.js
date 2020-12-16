export const users = {
  firstName:'John',
  lastName:'Deer',
  getFullName(){
    return (`${this.firstName} ${this.lastName}`);
  }
}

console.log(users.getFullName())