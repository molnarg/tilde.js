tilde.js
========

Operator overloading for JavaScript

Example
=======

```javascript
require('tilde');

var EvenNumber = function(n) {
  if (n % 2 !== 0) {
    throw new Error('EvenNumber must be initialized with an even number.');
  }

  this.n = n;
};

EvenNumber.prototype.compare = function(another) {
  if (this.n == another.n) return  0;
  if (this.n <  another.n) return  1;
  if (this.n >  another.n) return -1;
};

var assert = require('assert')
  , a = new EvenNumber(6)
  , b = new EvenNumber(8)
  , c = new EvenNumber(8);

assert(a <= ~b);
assert(a <  ~b);
assert(c >= ~a);
assert(c >  ~a);
assert(b == ~c);

// Alternative form
assert(~ a <= b);
assert(~ a <  b);
assert(~ c >= a);
assert(~ c >  a);
assert(~ b == c);
```

Installation
============

Using [npm](http://npmjs.org):

    npm install tilde

License
=======

Copyright (C) 2011 Gábor Molnár

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
