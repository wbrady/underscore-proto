var should = require('should');
var util = require('util');
var underscore = require('../lib/underscore_proto');

describe("Underscore prototype", function() {
  var arr = [];
  var obj = {};
  var func = function() {};

  function hasFunctions(obj, functions) {
    functions.each(function(func) {
      (typeof obj[func] === 'function').should.equal(true, util.inspect(obj) + "'s property '" + func + "' is not a function");
    });
  }

  it("Array.prototype has underscore collection methods", function() {
    hasFunctions(arr, ['each', 'map', 'reduce', 'reduceRight', 'find', 'filter', 'where', 'reject', 'all', 'any', 'contains', 'invoke', 'pluck', 'max', 'min', 'sortBy', 'groupBy', 'countBy', 'shuffle', 'toArray', 'size']);
  });

  it("Object.prototype has underscore collection methods", function() {
    hasFunctions(obj, ['each', 'map', 'reduce', 'reduceRight', 'find', 'filter', 'where', 'reject', 'all', 'any', 'contains', 'invoke', 'pluck', 'max', 'min', 'sortBy', 'groupBy', 'countBy', 'shuffle', 'toArray', 'size']);
  });

  it("Array.prototype has underscore array methods", function() {
    hasFunctions(arr, ['first', 'initial', 'last', 'rest', 'compact', 'flatten', 'without', 'union', 'intersection', 'difference', 'uniq', 'zip', 'object', 'indexOf', 'lastIndexOf', 'sortedIndex', 'range']);
  });

  it("Function.prototype has underscore function methods", function() {
    hasFunctions(func, ['bind', 'bindAll', 'memorize', 'delay', 'defer', 'throttle', 'debounce', 'once', 'after', 'wrap', 'compose']);
  });

  it("Object.prototype has underscore object methods", function() {
    hasFunctions(obj, ['keys', 'values', 'pairs', 'invert', 'functions', 'extend', 'pick', 'omit', 'defaults', 'clone', 'tap', 'has', 'isEqual', 'isEmpty', 'isElement', 'isArray', 'isObject', 'isArguments', 'isFunction', 'isString', 'isNumber', 'isFinite', 'isBoolean', 'isDate', 'isRegExp', 'isNan', 'isNull', 'isUndefined']);
  });

  it("Exports the original underscore object", function() {
    var originalUnderscoreKeys = Object.keys(require('underscore'));
    var underscoreProtoKeys = Object.keys(underscore);
    underscoreProtoKeys.difference(originalUnderscoreKeys).should.be.empty;
  });
});
