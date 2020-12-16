export const users = {
  firstName:'John',
  lastName:'Doe',
  getFullName(){
    return (`${this.firstName} ${this.lastName}`);
  },
  setFullName(fullName){
    let arr = fullName.split(' ');
    this.firstName = arr [0];
    console.log(this.firstName)
    this.lastName = arr [1];
    console.log(this.lastName)
  }
}
