var __ = ceosAugment = function (selector) { return ceosAugment.get(selector) };

/**
 * Return an element given its ID
 * 
 * @param string id ID of the element to be returned.
 * @returns Object Element having by the given ID.
 */
__.byID = function (id) {
  return document.getElementById(id);
}

/**
 * Returns a collection containing all the elements within the document having
 * the given class name.
 * 
 * @param string className Class name which the elements have to have to be
 *    returned.
 * @returns HTMLCollection Returns a HTMLCollection containing all the elements
 *    having the given class name.
 */
__.byClass = function (className) {
  return document.getElementsByClassName(className);
}

/**
 * Returns a collection containing all the elements within the document having
 * the given tag name.
 * 
 * @param string tagName Tag name which the elements have to have to be
 *    returned.
 * @returns HTMLCollection Returns a HTMLCollection containing all the elements
 *    having the given tag name.
 */
__.byTag = function (tagName) {
  return document.getElementsByTagName(tagName);
}

/**
 * Returns the first element from within the document which applies to the given
 * selection rules.
 * 
 * @param string selector Selection rules by which the element must apply.
 * @returns Element Returns the first element that fits the given selection
 *    rules.
 */
__.getSingle = function (selector) {
  return document.querySelector(selector);
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
  return document.querySelectorAll(selector);
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
  var elements = __.getAll(selector);
  
  if(elements > 1) {
    return elements;
  } else {
    return elements[0];
  }
}

/**
 * Prototype hooking
 */
;(function() {
  document.byID = __.byID;
  document.byClass = __.byClass;
  document.byTag = __.byTag;
  document.get = __.get;
  document.getSingle = __.getSingle;
  document.getAll = __.getAll;
})();