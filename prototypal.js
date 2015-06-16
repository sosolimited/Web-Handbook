var prototypalResults = (function () {

console.log("Prototypal Inheritance.");

/// Public properties of base object.
var Thing = function () {
  this.x = 0;
  this.y = 0;
  this.vx = 0;
  this.vy = 0;
};

/// Public interface of base object.
Thing.prototype.setVelocity = function(x, y) {
  this.vx = x;
  this.vy = y;
};

Thing.prototype.update = function() {
  this.x += this.vx;
  this.y += this.vy;
  console.log("Updated Thing", this.x, this.y);
};

/// Derived objects call thing.
var DerivedThing = function (options) {
  Thing.call(this);
  this.name = options && options.name || "Default name";
  this.prototype.setVelocity(20, 20);
};

DerivedThing.prototype = Object.create(Thing);
DerivedThing.prototype.constructor = DerivedThing;

DerivedThing.prototype.update = function () {
  console.log("Updating derived thing. Named", this.name);
  this.prototype.update();
};

var thing = new Thing(),
    derived = new DerivedThing({name: "Custom Name"});

for (var i = 0; i < 5; i += 1) {
  thing.update();
  derived.update();
}

return {thing: thing, derived: derived};

} ());