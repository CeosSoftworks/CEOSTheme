"use strict"

var ceosAugment = function (selector) { return ceosAugment.get(selector) },
    __ = ceosAugment;

/**
 * Returns the first element from within the document which applies to the given
 * selection rules.
 * 
 * @param string selector Selection rules by which the element must apply.
 * @returns Element Returns the first element that fits the given selection
 *    rules.
 */
__.getSingle = function (selector) {
  var target = (this instanceof HTMLElement ? this : document);
  return target.querySelector(selector);
}

/**
 * Returns all the elements from within the document which applies to the given
 * selection rules.
 * 
 * @param string selector Selection rules by which the elements must apply.
 * @returns Element Returns all elements that fit the given selection
 *    rules.
 */
__.getAll = function (selector) {
  var target = (this instanceof HTMLElement ? this : document);
  return target.querySelectorAll(selector);
}

/**
 * Returns a single element or a collection of elements depending by how many
 * elements following the given selection rule where found within the document.
 * 
 * @param string selector Selection rules by which the elements must apply.
 * @returns Element|HTMLCollection If only one element fits the given selection
 *    rules, this function returns said element. If more than one element fits
 *    the given selection rules, a HTMLCollection containing said elements is
 *    returned.
 */
__.get = function (selector) {
  var target = (this instanceof HTMLElement ? this : document);
  var elements = __.getAll.call(target, selector);
  
  if(elements.length > 1) {
    return elements;
  } else {
    return elements[0];
  }
}

console.log("CLONE note implemented");
__.clone = function (obj) {
  console.log("CLONE note implemented");
}

/**
 * Converts the given string into DOM elements. If invoked directly, the
 * created element is returned. Otherwise if invoke as part of a HTML element,
 * the created object is appended to the calling object and also returned.
 * With this function it's easier to create new DOM elements while determining
 * its attributes and inner HTML in the process. For a more "traditional" way
 * of creating DOM elements, use __.createByTag.
 * 
 * @param string str The string to be used for creating the HTML elements.
 * @returns HTMLElement The created DOM elements specified by the
 *    string given.
 */
__.create = function () {
  var args = arguments.toArray();
  if(args.length == 1) {
    args.unshift(null);
  }
  
  var target = (args[0] instanceof HTMLElement ? args[0] : this ),
      str = args[1],
      el = document.createElement('div');
      
  el.innerHTML = str;
  el = el.firstChild;
      
  if(target instanceof HTMLElement) {
    this.append(el);
  }
  
  return el;
}

/**
 * Creates a DOM element of a given type. If invoked directly, the
 * created element is returned, otherwise if invoked as part of a HTML element,
 * the created element will be appended to the calling object and also returned.
 * This function creates a vanilla element without any attributes or inner HTML.
 * To create an element while specifying its attributes and inner HTML,
 * use the __.create function.
 * 
 * @param string type The type (tag name) of the element to be created.
 * @returns HTMLElement The created element.
 */
__.createByTag = function (type) {
  var args = arguments.toArray();
  if(args.length == 1) {
    args.unshift(null);
  }
  
  var target = (args[0] instanceof HTMLElement ? args[0] : this),
      type = args[1],
      el = document.createElement(type);
  
  if(target instanceof HTMLElement) {
    target.append(el);
  }
  
  return el;
}


__.append = function () {
  var args = arguments.toArray();
  if(args.length == 1) {
    args.unshift(null);
  }
  
  var into = (args[0] instanceof HTMLElement ? args[0] : this),
      item = (typeof args[1] == "string" ? __.create(args[1]) : args[1]);
  
  into.appendChild(item);
}

__.prepend = function (item) {}
__.insertAt = function (item, pos) {}
__.remove = function (item) {}
__.removeAt = function (pos) {}
__.replace = function (item, replacement) {}
__.replaceAt = function (pos, replacement) {}
__.switch = function (item1, item2) {}
__.switchAt = function (pos1, pos2) {}


__.parents = function () {}
__.parentsUntil = function () {}
__.parentsSearch = function () {}
__.immediateParent = function () {}
__.siblings = function () {}
__.previous = function () {}
__.next = function () {}

/**
 * Prototype hooking
 */
;(function() {
  HTMLElement.prototype.get = __.get;
  HTMLElement.prototype.getSingle = __.getSingle;
  HTMLElement.prototype.getAll = __.getAll;
  HTMLElement.prototype.create = __.create;
  HTMLElement.prototype.createByTag = __.createByTag;
  HTMLElement.prototype.append = __.append;
  HTMLElement.prototype.prepend = __.prepend;
  HTMLElement.prototype.insertAt = __.insertAt;
  HTMLElement.prototype.remove = __.remove;
  HTMLElement.prototype.removeAt = __.removeAt;
  HTMLElement.prototype.replace = __.replace;
  HTMLElement.prototype.replaceAt = __.replaceAt;
  HTMLElement.prototype.switch = __.switch;
  HTMLElement.prototype.switchAt = __.switchAt;
  HTMLElement.prototype.parents = __.parents;
  HTMLElement.prototype.parentsUntil = __.parentsUntil;
  HTMLElement.prototype.parentsSearch = __.parentsSearch;
  HTMLElement.prototype.immediateParent = __.immediateParent;
  HTMLElement.prototype.firstHTMLChild = __.firstHTMLChild;
  HTMLElement.prototype.lastHTMLChild = __.lastHTMLChild;
  HTMLElement.prototype.siblings = __.siblings;
  HTMLElement.prototype.previous = __.previous;
  HTMLElement.prototype.next = __.next;
  
  NodeList.prototype.first = __.first;
  NodeList.prototype.last = __.last;
  NodeList.prototype.firstHTMLChild = __.firstHTMLChild;
  NodeList.prototype.lastHTMLChild = __.lastHTMLChild;
})();