'use strict'

const event = {
    guests: [
        { name: 'Tom', email: 'example@server.com', age: 17},
        { name: 'John', email: 'example@server.com', age: 18}
    ],
    message: 'Welcome to the party!',
    getInvintations() {
        return this.guests
            .filter(({ age }) => age >= 18)
            .map(({ name, email }) => ({
                message: `Dear ${name}! ${this.message}`,
                email
            }));
    }
}

console.log(event.getInvintations());