"use strict"

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
 * Returns all instances of Element within a collection.
 * 
 * @param Collection obj Collection to be scanned for instances of Element.
 * @returns Array Array containing all the elements found within the given
 *    collection.
 */
__.array.getElements = function (obj) {
  var obj = obj || this;
  var elements = [];
  
  __.array.toArray(obj).forEach(function(el, i, arr){
    if(el instanceof Element) {
      elements.push(el);
    }
  });
  
  return elements;
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
 * Gets the first element of a collection.
 * 
 * @param Collection The collection to have the first element returned.
 * @returns mixed The first element present inside the collection.
 */
__.array.first = function (list) {
  var list = (list && list.length ? list : this);
  return (list instanceof Array ? list[0] : list.toArray()[0]);
}

/**
 * Gets the last element of a collection.
 * 
 * @param Collection The collection to have the last element returned.
 * @returns mixed The last element present inside the collection.
 */
__.array.last = function (list) {
  var list = (list && list.length ? list : this),
      last = list.length - 1;
  return (list instanceof Array ? list[last] : list.toArray()[last]);
}

/**
 * Gets the first instance of Element in a collection.
 * 
 * @param Collection The collection to have the first element returned.
 * @returns mixed The first element present inside the collection.
 */
__.array.firstElementChild = function (list) {
  var list = (list && list.length ? list : this);
  
  list = (list instanceof Array ? list : list.toArray());

  for(var i = 0; i < list.length; i++) {
    if(list[i] instanceof Element) {
      return list[i];
    }
  }
}

/**
 * Gets the last element of a collection.
 * 
 * @param Collection The collection to have the last element returned.
 * @returns mixed The last element present inside the collection.
 */
__.array.lastElementChild = function (list) {
  var list = (list && list.length ? list : this),
      last = list.length - 1;
      
  list = (list instanceof Array ? list : list.toArray());
  
  for(var i = list.length - 1; i >= 0; i--) {
    if(list[i] instanceof Element) {
      return list[i];
    }
  }
}

/**
 * Gets the first HTML element of a collection.
 * 
 * @param Collection The collection to have the first HTML element returned.
 * @returns mixed The first HTML element present inside the collection.
 */
__.array.firstHTMLChild = function (list) {
  var list = (list && list.length ? list : this);
  
  list = (list instanceof Array ? list : list.toArray());

  for(var i = 0; i < list.length; i++) {
    if(list[i] instanceof HTMLElement) {
      return list[i];
    }
  }
}

/**
 * Gets the last HTML element of a collection.
 * 
 * @param Collection The collection to have the last HTML element returned.
 * @returns mixed The last HTML element present inside the collection.
 */
__.array.lastHTMLChild = function (list) {
  var list = (list && list.length ? list : this),
      last = list.length - 1;
      
  list = (list instanceof Array ? list : list.toArray());
  
  for(var i = list.length - 1; i >= 0; i--) {
    if(list[i] instanceof HTMLElement) {
      return list[i];
    }
  }
}

/**
 * Prototype hooking
 */
;(function() {
  Array.prototype.first = __.array.first;
  Array.prototype.last = __.array.last;
  Array.prototype.firstHTMLChild = __.array.firstHTMLChild;
  Array.prototype.lastHTMLChild = __.array.lastHTMLChild;
  
  NodeList.prototype.getElements = __.array.getElements;
  NodeList.prototype.getHTMLElements = __.array.getHTMLElements;
  NodeList.prototype.toArray = __.array.toArray;
  NodeList.prototype.first = __.array.first;
  NodeList.prototype.last = __.array.last;
  NodeList.prototype.firstElementChild = __.array.firstElementChild;
  NodeList.prototype.firstHTMLChild = __.array.firstHTMLChild;
  NodeList.prototype.lastElementChild = __.array.lastElementChild;
  NodeList.prototype.lastHTMLChild = __.array.lastHTMLChild;
  
  HTMLCollection.prototype.toArray = __.array.toArray;
  HTMLCollection.prototype.first = __.array.first;
  HTMLCollection.prototype.last = __.array.last;
  
  HTMLAllCollection.prototype.toArray = __.array.toArray;
  HTMLAllCollection.prototype.first = __.array.first;
  HTMLAllCollection.prototype.last = __.array.last;
  
  arguments.constructor.prototype.toArray = __.array.toArray;
  arguments.constructor.prototype.first = __.array.first;
  arguments.constructor.prototype.last = __.array.last;
  
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