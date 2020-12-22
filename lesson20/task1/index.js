class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(newAge) {
    if (newAge < 0) {
      return false;
    }

    this.age = newAge;

    if (this.age >= 25) {
      this.requestNewPhoto();
    }

    return newAge;
  }

  static createEmpty() {
    return new User('', null);
  }
}
const user1 = new User('bob', 23);
console.log(User.createEmpty());

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// User.prototype.sayHi = function () {
//   console.log(`Hi, I am ${this.name}`);
// };

// User.prototype.requestNewPhoto = function () {
//   console.log(`New photo request was sent for ${this.name}`);
// };

// User.prototype.setAge = function (newAge) {
//   if (newAge < 0) {
//     return false;
//   }

//   this.age = newAge;

//   if (this.age >= 25) {
//     this.requestNewPhoto();
//   }

//   return this.age;
// };
