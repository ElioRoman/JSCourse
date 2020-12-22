class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}
// const user = new User('1', 'Tom', 'session-id');
// console.log(user.id); // '1'
// console.log(user.name); // 'Tom'
// console.log(user.sessionId); // 'session-id'

// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // // 'Tom'

class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map(el => el.name);
  }

  getUserIds() {
    return this._users.map(el => el.id);
  }

  getUserNameById(id) {
    return this._users.filter(el => el.id === id).map(i => i.name)[0];
  }
}
