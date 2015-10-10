'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = flatten;

function flatten(thunk) {
  return function (done) {
    thunk(function (err, res) {
      if (err) {
        return done(err);
      }
      if (typeof res === 'function') {
        return flatten(res)(done);
      }
      done(null, res);
    });
  };
}

module.exports = exports['default'];
