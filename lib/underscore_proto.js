var _ = require('underscore');

var setMethod = function(prototype, method) {
  Object.defineProperty(prototype, method, {
    enumerable: false,
    writable: true,
    value: function() {
      arguments = Array.prototype.slice.call(arguments);
      arguments.unshift(this);
      return _[method].apply(this, arguments);
    }
  });
};

var collectionMethods = ['each', 'map', 'reduce', 'reduceRight', 'find', 'filter', 'where', 'reject', 'all', 'any', 'contains', 'invoke', 'pluck', 'max', 'min', 'sortBy', 'groupBy', 'countBy', 'shuffle', 'toArray', 'size'];
_.each(collectionMethods, function(method) {
  setMethod(Array.prototype, method);
  setMethod(Object.prototype, method);
});

var arrayMethods = ['first', 'initial', 'last', 'rest', 'compact', 'flatten', 'without', 'union', 'intersection', 'difference', 'uniq', 'zip', 'object', 'indexOf', 'lastIndexOf', 'sortedIndex', 'range'];
_.each(arrayMethods, function(method) {
  setMethod(Array.prototype, method);
});

var functionMethods = ['bind', 'bindAll', 'memorize', 'delay', 'defer', 'throttle', 'debounce', 'once', 'after', 'wrap', 'compose'];
_.each(functionMethods, function(method) {
  setMethod(Function.prototype, method);
});

var objectMethods = ['keys', 'values', 'pairs', 'invert', 'functions', 'extend', 'pick', 'omit', 'defaults', 'clone', 'tap', 'has', 'isEqual', 'isEmpty', 'isElement', 'isArray', 'isObject', 'isArguments', 'isFunction', 'isString', 'isNumber', 'isFinite', 'isBoolean', 'isDate', 'isRegExp', 'isNan', 'isNull', 'isUndefined'];
_.each(objectMethods, function(method) {
  setMethod(Object.prototype, method);
});

module.exports = _;
