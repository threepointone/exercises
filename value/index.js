'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = value;

function value(_x) {
  var _again = true;

  _function: while (_again) {
    var fn = _x;
    _again = false;

    if (typeof fn === 'function') {
      _x = fn();
      _again = true;
      continue _function;
    }
    return fn;
  }
}

module.exports = exports['default'];
