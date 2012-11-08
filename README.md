underscore-proto
================

Improvement to [underscore-prototype](https://npmjs.org/package/underscore-prototype) node.js module using the latest version of [underscore.js](http://underscorejs.org/).

This module takes all the nice functions from underscore.js and puts them on the prototypes of Array, Object, and Function. So for example rather than writing:

      var _ = require('underscore');
      var arr = [1, 2, 3];
      var found = _.find(arr, function(el) { return el < 2; });
      // found is equal to 1

You now just have to write

      var _ = require('underscore-proto');
      var arr = [1, 2, 3];
      var found = arr.find(function(el) { return el < 2; });
      // found is equal to 1


`require('underscore-proto')` returns the same object from `require('underscore')` so you can still use the old methods the same way if you want.


Run tests with

      npm test
