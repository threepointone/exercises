"use strict";

var _extends = require("babel-runtime/helpers/extends")["default"];

var _Object$assign = require("babel-runtime/core-js/object/assign")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = invert;

function invert(node) {
  return _Object$assign(node, _extends({}, node.right ? { left: invert(node.right) } : {}, node.left ? { right: invert(node.left) } : {}));
}

module.exports = exports["default"];
