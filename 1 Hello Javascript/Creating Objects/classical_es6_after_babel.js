"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var classicalResults = (function () {

  console.log("Classical definition using ES6/Babeljs");

  // Define a Thing that is updateable

  var Thing = (function () {
    function Thing(x, y) {
      _classCallCheck(this, Thing);

      this.x = x || 0;
      this.y = y || 0;
      this.vx = 0;
      this.vy = 0;
    }

    _createClass(Thing, [{
      key: "update",
      value: function update() {
        this.x += this.vx;
        this.y += this.vy;
        console.log("Update Thing", this.x, this.y);
      }
    }, {
      key: "setVelocity",
      value: function setVelocity(x, y) {
        this.vx = x;
        this.vy = y;
      }
    }]);

    return Thing;
  })();

  var thing = new Thing(2, 2);
  thing.setVelocity(10, 10);
  thing.update();
  thing.update();

  return { thing: thing };
})();
