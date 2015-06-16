var functionalResults = (function () {

console.log("Functional Composition.");

/// Creates a thing that is updateable.
function createThing() {
  /// locally-scoped variables.
  var out = {},
      x = 0,
      y = 0,
      vx = 0,
      vy = 0;

  /// locally-scoped functions.
  function update() {
    x += vx;
    y += vy;
    console.log("Updated thing", x, y);
  }

  function setVelocity(x, y) {
    vx = x;
    vy = y;
  }

  /// Public interface is returned through the out object.
  out.setVelocity = setVelocity;
  out.update = update;
  out.getPosition = function () { return { x: x, y: y }; };
  return out;
}

/// Derived objects create base object directly
function createDerivedThing(options) {
  var out = createThing(),
      name = options && options.name || "Default Name",
      baseUpdate = out.update;

  // override update function
  function update() {
    console.log("Updating derived thing. Named", name);
    baseUpdate();
  }

  out.setVelocity(20, 20);

  out.getName = function () { return name; };
  out.update = update;

  return out;
}

var thing = createThing(),
    derived = createDerivedThing({name: "Custom Name"});

for (var i = 0; i < 5; i += 1) {
  thing.update();
  derived.update();
}

return {thing: thing, derived: derived};

} ());