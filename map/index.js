"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = map;

function map(arr, fn, ctx) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    res.push(fn.call(ctx, arr[i], i, arr));
  }
  return res;
}

module.exports = exports["default"];
