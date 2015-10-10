"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = search;
function log() {
  console.log(this);
  return this;
}

function search(arr, key) {
  var start = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
  var end = arguments.length <= 3 || arguments[3] === undefined ? arr.length - 1 : arguments[3];
  return (function () {
    if (end === start) {
      if (arr[start] === key) {
        return start;
      }
      return -1;
    }
    if (start > end) {
      return -1;
    }
    var mid = Math.floor(start + (end - start + 1) / 2);
    if (arr[mid] === key) {
      return mid;
    }
    if (arr[mid] > key) {
      return search(arr, key, start, mid - 1);
    }
    if (arr[mid] < key) {
      return search(arr, key, mid + 1, end);
    }
  })();
}

// var arr = ['apple', 'banana', 'cherry', 'dates', 'eggs', 'figs', 'grapes'];

// search(arr, 'cherry')::log(); // 2 since arr[2] === 'cherry'

// search(arr, 'zebra')::log(); // -1 for not found
module.exports = exports["default"];
