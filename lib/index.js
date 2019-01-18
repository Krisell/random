'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Random = {
  integerBetween: function integerBetween(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  },
  randomDigits: function randomDigits(number) {
    return Array(number).fill(0).map(function (el) {
      return Math.floor(Math.random() * 10);
    }).join('');
  },
  randomString: function randomString(length) {
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    return Array(length).fill(0).map(function (el) {
      return el = possible.charAt(Math.floor(Math.random() * possible.length));
    }).join('');
  }
};

exports.default = Random;