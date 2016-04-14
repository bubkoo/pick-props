'use strict';

var isObject = require('is-object');
var pickKeys = require('pick-keys');


module.exports = function (object, count) {

  if (!object || !isObject(object)) {
    return [];
  }

  var keys   = pickKeys(object, count);
  var result = [];

  for (var i = 0, l = keys.length; i < l; i++) {
    result.push(object[keys[i]]);
  }

  return result;
};
