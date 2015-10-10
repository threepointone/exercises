"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Middleware = (function () {
  function Middleware() {
    _classCallCheck(this, Middleware);

    this.chain = [];
  }

  _createClass(Middleware, [{
    key: "use",
    value: function use(fn) {
      this.chain.push(fn);
    }
  }, {
    key: "go",
    value: function go(fn) {
      var ctx = {},
          ctr = 0,
          chain = this.chain;
      function advance() {

        if (ctr === chain.length) {
          return fn.call(ctx);
        }
        ctr++;
        chain[ctr - 1].call(ctx, advance);
      }
      advance();
    }
  }]);

  return Middleware;
})();

exports["default"] = Middleware;
module.exports = exports["default"];
