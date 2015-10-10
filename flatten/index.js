"use strict";

var _toConsumableArray = require("babel-runtime/helpers/to-consumable-array")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = flatten;

function flatten(inputArr) {
  return inputArr.reduce(function (arr, el) {
    return [].concat(_toConsumableArray(arr), _toConsumableArray(Array.isArray(el) ? flatten(el) : [el]));
  }, []);
}

module.exports = exports["default"];
