var classicalResults = (function () {

console.log("Classical definition using ES6/Babeljs");

// Define a Thing that is updateable
class Thing {
  constructor(x, y) {
    this.x = x || 0;
    this.y = y || 0;
    this.vx = 0;
    this.vy = 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    console.log("Update Thing", this.x, this.y);
  }

  setVelocity(x, y) {
    this.vx = x;
    this.vy = y;
  }
}

var thing = new Thing(2, 2);
thing.setVelocity(10, 10);
thing.update();
thing.update();

return {thing: thing};
}());
