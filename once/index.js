"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = once;
function log(msg) {
  console.log(msg !== undefined ? msg : this);
  return this;
}

function once(fn) {
  var done = false,
      val = undefined;
  return function () {
    if (!done) {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      val = fn.call.apply(fn, [this].concat(args));
      done = true;
    }
    return val;
  };
}

module.exports = exports["default"];
