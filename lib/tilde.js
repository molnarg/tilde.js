(function() {
  var another
    , anotherGiven = true
    , checkTimer
    , getPrototypeChain
    , valueOf

  getPrototypeChain = function(object) {
    var chain = [object]

    do {
      object = object.constructor.prototype

      if (chain.indexOf(object) === -1)  {
        chain.push(object)
      } else {
        if (chain.indexOf(Object.prototype) === -1) chain.push(Object.prototype)
        break;
      }
    } while (true)

    return chain
  }

  valueOf = function() {
    var i, thisChain, anotherChain;

    anotherGiven = !anotherGiven
    if (!anotherGiven) {
      another = this

      checkTimer = setTimeout(function(){
        throw new Error('CompareError: Odd number of valueOf accesses.')
      }, 0)

      return ~0
    }

    clearTimeout(checkTimer);

    // If one of them has compare function, and the other one does not
    // it's probably a programming mistake, like absence of a type check
    if (typeof this.compare !== 'function' || typeof another.compare !== 'function') {
      throw new Error( 'CompareError: Both sides should have a compare function '
                     + 'to be able to compare them.')
    }

    // If they share the same compare function
    if (this.compare === another.compare) {
      return another.compare(this)
    }

    // If they don't share the same compare function: traverse
    // the prototype chain for a common parent with compare method
    thisChain = getPrototypeChain(this);
    anotherChain = getPrototypeChain(another);

    for (i = 0; i < anotherChain.length; i += 1) {
      if (thisChain.indexOf(anotherChain[i]) !== -1 &&
          typeof anotherChain[i].compare === 'function') {
        return anotherChain[i].compare(this);
      }
    }

    throw new Error( 'CompareError: The two object has to share at least one common '
                   + 'ancestor with compare function to be able to compare them.')
  };

  if (Object.defineProperty) {
    Object.defineProperty(Object.prototype, 'valueOf', {enumerable : false, value : valueOf})
  } else {
    Object.prototype.valueOf = valueOf
  }

})();
