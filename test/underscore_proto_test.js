var should = require('should');
var util = require('util');
var underscore = require('../lib/underscore_proto');

var collectionMethods = ['each', 'map', 'reduce', 'reduceRight', 'find', 'filter', 'where', 'reject', 'all', 'any', 'contains', 'invoke', 'pluck', 'max', 'min', 'sortBy', 'groupBy', 'countBy', 'shuffle', 'toArray', 'size'];
var arrayMethods = ['first', 'initial', 'last', 'rest', 'compact', 'flatten', 'without', 'union', 'intersection', 'difference', 'uniq', 'zip', 'object', 'indexOf', 'lastIndexOf', 'sortedIndex', 'range'];
var functionMethods = ['bind', 'bindAll', 'memorize', 'delay', 'defer', 'throttle', 'debounce', 'once', 'after', 'wrap', 'compose'];
var objectMethods = ['keys', 'values', 'pairs', 'invert', 'functions', 'extend', 'pick', 'omit', 'defaults', 'clone', 'tap', 'has', 'isEqual', 'isEmpty', 'isElement', 'isArray', 'isObject', 'isArguments', 'isFunction', 'isString', 'isNumber', 'isFinite', 'isBoolean', 'isDate', 'isRegExp', 'isNan', 'isNull', 'isUndefined'];

var arr = [];
var obj = {};
var func = function() {};

function hasFunctions(obj, functions) {
  functions.each(function(func) {
    (typeof obj[func] === 'function').should.equal(true, util.inspect(obj) + "'s property '" + func + "' is not a function");
  });
}

describe("Underscore prototype", function() {
  it("Array.prototype has underscore collection methods", function() {
    hasFunctions(arr, collectionMethods);
  });

  it("Object.prototype has underscore collection methods", function() {
    hasFunctions(obj, collectionMethods);
  });

  it("Array.prototype has underscore array methods", function() {
    hasFunctions(arr, arrayMethods);
  });

  it("Function.prototype has underscore function methods", function() {
    hasFunctions(func, functionMethods);
  });

  it("Object.prototype has underscore object methods", function() {
    hasFunctions(obj, objectMethods);
  });

  it("Exports the original underscore object", function() {
    var originalUnderscoreKeys = Object.keys(require('underscore'));
    var underscoreProtoKeys = Object.keys(underscore);
    underscoreProtoKeys.difference(originalUnderscoreKeys).should.be.empty;
  });

  it("Does not set methods as enumerable", function() {
    for (var prop in arr) {
      collectionMethods.should.not.include(prop);
      arrayMethods.should.not.include(prop);
    }

    for (var prop in obj) {
      collectionMethods.should.not.include(prop);
      objectMethods.should.not.include(prop);
    }

    for (var prop in func) {
      functionMethods.should.not.include(prop);
    }
  });
});
