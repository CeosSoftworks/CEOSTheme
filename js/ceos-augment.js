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
  var target = (this instanceof Element ? this : document);
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
  var target = (this instanceof Element ? this : document);
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
  var target = (this instanceof Element ? this : document);
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
 * @param target Element (Optional) Target element. If a target element is
 *    provided to this function, the created DOM elements are appended to it.
 * @param string str The string to be used for creating the HTML elements.
 * @returns Element The created DOM elements specified by the
 *    string given.
 */
__.create = function () {
  var args = arguments.toArray();
  if(args.length === 1) {
    args.unshift(null);
  }
  
  var target = (args[0] instanceof Element ? args[0] : this ),
      str = args[1],
      el = document.createElement('div');
      
  el.innerHTML = str;
  el = el.firstChild;
      
  if(target instanceof Element) {
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
 * @param target Element (Optional) Target element. If a target element is
 *    given, the created element is appended to it. 
 * @param string type The type (tag name) of the element to be created.
 * @returns Element The created element.
 */
__.createByTag = function () {
  var args = arguments.toArray();
  if(args.length === 1) {
    args.unshift(null);
  }
  
  var target = (args[0] instanceof Element ? args[0] : this),
      type = args[1],
      el = document.createElement(type);
  
  if(target instanceof Element) {
    target.append(el);
  }
  
  return el;
}

/**
 * Appends an element inside another element.
 * 
 * @param target Element Element to have the other one appended
 *    to it.
 * @param element string|Node The element to be appended into the target
 *    element. If a string is given, the string is interpreted as DOM element,
 *    which will then be appended into the target element.
 */
__.append = function () {
  var args = arguments.toArray();
  if(args.length === 1) {
    args.unshift(null);
  }
  
  var target = (args[0] instanceof Element ? args[0] : this),
      item = (typeof args[1] === "string" ? __.create(args[1]) : args[1]);
  
  target.appendChild(item);
}

/**
 * Prepends an element inside another element.
 * 
 * @param target Element Element to have the other one prepended to it.
 * @param element string|Node The element to be prepended into the target
 *    element. If a string is given, the string is interpreted as a DOM element,
 *    which will then be prepended into the target element.
 */
__.prepend = function () {
  var args = arguments.toArray();
  if(args.length === 1) {
    args.unshift(null);
  }
  
  var target = (args[0] instanceof Element ? args[0] : this),
      item = (typeof args[1] === "string" ? __.create(args[1]) : args[1]);
  
  target.insertBefore(item, target.childNodes[0]);
}

/**
 * Inserts a given element inside another element at a designated DOM position.
 * This procedure takes into account only the child nodes that come to be
 * an instance of Element, ignoring all others. To insert and element at
 * an exact position without ignoring any child node of the target element,
 * use __.insertExactlyAt.
 * 
 * @param target Element Element to have the other one prepended to it.
 * @param element string|Node The element to be prepended into the target
 *    element. If a string is given, the string is interpreted as a DOM element,
 *    which will then be prepended into the target element.
 */
__.insertAt = function () {
  var args = arguments.toArray();
  if(args.lenght === 1) {
    throw "Too few arguments given.";
  } else if(args.length === 2) {
    args.unshift(null);
  }
  
  var target = (args[0] instanceof Element ? args[0] : this),
      item = (typeof args[1] === "string" ? __.create(args[1]) : args[1]),
      pos = (!isNaN(args[2]) ? args[2] : 0);
  
  target.insertBefore(item, target.children[pos]);
}

/**
 * Inserts a given element inside another element exactly at a designated
 * DOM position.
 * This procedure takes into account all the child nodes of the given target
 * element. To take into account only the instances of Element inside the
 * target element, use __.insertAt.
 * 
 * @param target Element Element to have the other one prepended to it.
 * @param element string|Node The element to be prepended into the target
 *    element. If a string is given, the string is interpreted as a DOM element,
 *    which will then be prepended into the target element.
 */
__.insertExactlyAt = function () {
  var args = arguments.toArray();
  if(args.lenght === 1) {
    throw "Too few arguments given.";
  } else if(args.length === 2) {
    args.unshift(null);
  }
  
  var target = (args[0] instanceof Element ? args[0] : this),
      item = (typeof args[1] === "string" ? __.create(args[1]) : args[1]),
      pos = (!isNaN(args[2]) ? args[2] : 0);
  
  target.insertBefore(item, target.childNodes[pos]);
}

/**
 * Removes one or many elements from the DOM.
 * 
 * When invoked from an instance of Element without arguments, the invoking
 * element will be removed. When invoked from an instance of Element with a
 * string os selectors as argument, all child elements that fall into the
 * selection will be removed. When invoked from an instance of Element with
 * another element as an argument, the element given will be removed independent
 * of it being a child of the invoking element or not (rather useless, but you
 * can use that way, if you want to). And, finally, when invoked directly
 * ( __.remove() ), the root element of the document is assumed to be the
 * invoking element with all the rules afore mentioned applying to it.
 * 
 * @param {type} item
 * @returns {undefined}
 */
__.remove = function () {
  var args = arguments.toArray();
  if(args.length === 1) {
    args.unshift(null);
  }
  
  var source = (args[0] instanceof Element ? args[0] : document.documentElement),
      target = args[1];
  
  if(typeof target === "string") {
    target = (source instanceof Element ? source.get(target) : __(target));
  } else if(!(target instanceof Element)) {
    target = this;
  }
    
  if(target && target.length > 0) {
    target.toArray().forEach(function(el){
      el.parentNode.removeChild(el);
    });
  } else {
    target.parentNode.removeChild(target);
  }
}

__.removeAt = function (pos) {}
__.removeExactlyAt = function (pos) {}
__.replace = function (item, replacement) {}
__.replaceAt = function (pos, replacement) {}
__.replaceExactlyAt = function (pos, replacement) {}
__.switch = function (item1, item2) {}
__.switchAt = function (pos1, pos2) {}
__.switchExactlyAt = function (pos1, pos2) {}


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
  Element.prototype.get = __.get;
  Element.prototype.getSingle = __.getSingle;
  Element.prototype.getAll = __.getAll;
  Element.prototype.create = __.create;
  Element.prototype.createByTag = __.createByTag;
  Element.prototype.append = __.append;
  Element.prototype.prepend = __.prepend;
  Element.prototype.insertAt = __.insertAt;
  Element.prototype.insertExactlyAt = __.insertExactlyAt;
  Element.prototype.remove = __.remove;
  Element.prototype.removeAt = __.removeAt;
  Element.prototype.removeExactlyAt = __.removeExactlyAt;
  Element.prototype.replace = __.replace;
  Element.prototype.replaceAt = __.replaceAt;
  Element.prototype.replaceExactlyAt = __.replaceExactlyAt;
  Element.prototype.switch = __.switch;
  Element.prototype.switchAt = __.switchAt;
  Element.prototype.switchExactlyAt = __.switchExactlyAt;
  Element.prototype.parents = __.parents;
  Element.prototype.parentsUntil = __.parentsUntil;
  Element.prototype.parentsSearch = __.parentsSearch;
  Element.prototype.immediateParent = __.immediateParent;
  Element.prototype.firstHTMLChild = __.firstHTMLChild;
  Element.prototype.lastHTMLChild = __.lastHTMLChild;
  Element.prototype.siblings = __.siblings;
  Element.prototype.previous = __.previous;
  Element.prototype.next = __.next;
  
  NodeList.prototype.first = __.first;
  NodeList.prototype.last = __.last;
  NodeList.prototype.firstHTMLChild = __.firstHTMLChild;
  NodeList.prototype.lastHTMLChild = __.lastHTMLChild;
})();