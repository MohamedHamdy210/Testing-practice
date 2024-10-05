class cal {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  add() {
    return this.x + this.y;
  }
  sub() {
    return this.x - this.y;
  }
  by() {
    return this.x * this.y;
  }
  divide() {
    return parseFloat((this.x / this.y).toFixed(2));
  }
}
module.exports = cal;
