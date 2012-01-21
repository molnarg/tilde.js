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
```

Installation
============

Using [npm](http://npmjs.org):

    npm install tilde
