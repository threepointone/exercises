'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = memoize;
var cache = {};
var has = ({}).hasOwnProperty;

function memoize(fn) {
  return function () {
    for (var _len = arguments.length, keys = Array(_len), _key = 0; _key < _len; _key++) {
      keys[_key] = arguments[_key];
    }

    var key = keys.join(':');
    if (has.call(cache, key)) {
      return cache[key];
    }
    cache[key] = fn.apply(undefined, keys);
    return cache[key];
  };
}

module.exports = exports['default'];
