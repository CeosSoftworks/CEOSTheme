var __ = ceosAugment = ceosAugment || {};
    __.array = __.array || {};

/**
 * Converts a array-like object into an array.
 * 
 * @param array-like obj Object to be converted.
 * @returns Array Returns an actual array with the items of the array-like
 *    object.
 */
__.array.toArray = function (obj) {
  var obj = obj || this;
  return Array.prototype.slice.call(obj);
}

/**
 * Returns all the HTML elements within a collection.
 * 
 * @param Collection obj Collection to be scanned for HTML elements.
 * @returns Array Array containing all the HTML elements found within the given
 *    collection.
 */
__.array.getHTMLElements = function (obj) {
  var obj = obj || this;
  var elements = [];
  
  __.array.toArray(obj).forEach(function(el, i, arr){
    if(el instanceof HTMLElement) {
      elements.push(el);
    }
  });
  
  return elements;
}

/**
 * Prototype hooking
 */
;(function() {
  NodeList.prototype.getHTMLElements = __.array.getHTMLElements;
  NodeList.prototype.toArray = __.array.toArray;
  HTMLCollection.prototype.toArray = __.array.toArray;
  HTMLAllCollection.prototype.toArray = __.array.toArray;
  Int8Array.prototype.toArray = __.array.toArray;
  Int16Array.prototype.toArray = __.array.toArray;
  Int32Array.prototype.toArray = __.array.toArray;
  Uint8Array.prototype.toArray = __.array.toArray;
  Uint16Array.prototype.toArray = __.array.toArray;
  Uint32Array.prototype.toArray = __.array.toArray;
  Uint8ClampedArray.prototype.toArray = __.array.toArray;
  Float32Array.prototype.toArray = __.array.toArray;
  Float64Array.prototype.toArray = __.array.toArray;
})();