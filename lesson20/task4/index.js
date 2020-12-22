class Order {
  constructor(price, city, type) {
    this.id = Math.random().toString();
    this.price = price;
    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.dateConfirmed = null;
    this.city = city;
    this.type = type;
  }

  checkPrice() {
    return this.price > 1000;
  }

  confirmOrder() {
    this.isConfirmed = true;
    this.dateConfirmed = new Date();
  }

  isValidType() {
    return this.type === 'Sell' || this.type === 'Buy';
  }
}

const order1 = new Order(100, 'kiev', 'Sell');
console.log(order1);
console.log(order1.isValidType());
