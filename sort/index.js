"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = sort;

function sort(arr) {
  var fn = arguments.length <= 1 || arguments[1] === undefined ? insertion : arguments[1];

  fn(arr);
  return arr;
}

function swap(arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

// 53ms
function insertion(arr) {
  for (var i = 1; i < arr.length; i++) {
    for (var k = i; k > 0 && arr[k] < arr[k - 1]; k--) {
      swap(arr, k, k - 1);
    }
  }
}

// 72ms
function selection(arr) {
  for (var i = 0; i < arr.length; i++) {
    var k = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[k]) {
        k = j;
      }
    }
    if (k !== i) {
      swap(arr, i, k);
    }
  }
}

// 180ms
function bubble(arr) {
  for (var i = 0; i < arr.length; i++) {
    var swapped = false;
    for (var j = arr.length - 1; j > i; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
}
module.exports = exports["default"];
