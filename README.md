underscore-proto
================

Improvement to [underscore-prototype](https://npmjs.org/package/underscore-prototype) node.js module using the latest version of [underscore.js](http://underscorejs.org/).

Install
--------

      npm install underscore-proto

This module takes all the nice array and function functions from underscore.js and puts them on the prototypes of Array and Function. Object methods are not copied because they screw up for each in loops. So for example rather than writing:

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


Tests
------

      npm test


License
--------

(The MIT License)

Copyright (c) 2012 Will Brady

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
