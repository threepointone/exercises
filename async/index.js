'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.sequence = sequence;
exports.parallel = parallel;
exports.race = race;
function log(msg) {
  console.log(msg !== undefined ? msg : this);
  return this;
}

function sequence(thunks) {

  return function (done) {
    var ctr = 0;
    function advance(data) {
      thunks[ctr](function (err, res) {
        if (err) {
          return done(err);
        }
        ctr++;
        if (ctr === thunks.length) {
          done(null, res);
        } else {
          advance(res);
        }
      }, data);
    }
    advance();
  };
}

function parallel(thunks) {
  return function (done) {
    var ctr = 0,
        arr = [],
        failed = undefined;
    function andThen(i, err, res) {
      if (err) {
        failed = true;
        return done(err);
      }
      if (!failed) {
        ctr++;
        arr[i] = res;
        if (ctr === thunks.length) {
          done(null, arr);
        }
      }
    }
    thunks.forEach(function (thunk, i) {
      return thunk(function (err, res) {
        return andThen(i, err, res);
      });
    });
  };
}

function race(thunks) {
  return function (done) {
    var winner = undefined;
    thunks.forEach(function (thunk) {
      return thunk(function (err, res) {
        if (err && !winner) {
          winner = 'broken';
          return done(err);
        }
        if (!winner) {
          winner = res;
          done(null, winner);
        }
      });
    });
  };
}
