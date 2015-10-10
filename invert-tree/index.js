"use strict";

var _Object$assign = require("babel-runtime/core-js/object/assign")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = invert;

function invert(node) {
  return _Object$assign(node, node.right ? { left: invert(node.right) } : {}, node.left ? { right: invert(node.left) } : {});
}

var root = { value: 6 };
var left = { value: 4 };
var right = { value: 8 };
var leftOfLeft = { value: 3 };
var rightOfLeft = { value: 5 };
var leftOfRight = { value: 7 };
var rightOfRight = { value: 9 };
root.left = left;
root.right = right;
left.left = leftOfLeft;
left.right = rightOfLeft;
right.left = leftOfRight;
right.right = rightOfRight;

invert(root);

console.log(root.left.left.value); // should be 9
module.exports = exports["default"];
