var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"];
  
  function addElementToBeginningOfArray(array, element) {
    return [element, ...array];
  } 
  
  function destructivelyAddElementToBeginningOfArray(array, element) {
    return array.unshift(element);
  }
  
  function addElementToEndOfArray(array, element) {
    return [...array, element];
  } 
  
  function destructivelyAddElementToEndOfArray(array, element) {
    array.push(element);
    return array;
  }
  
  function accessElementInArray(array, i) {
    return array[i];
  }
  
  function destructivelyRemoveElementFromBeginningOfArray(array) {
    return array.shift();
  }
  
  function removeElementFromBeginningOfArray(array) {
    return array.slice(1);
  }
  
  function destructivelyRemoveElementFromEndOfArray(array) {
    return array.pop();
  }
  
  function removeElementFromEndOfArray(array) {
    return array.slice(0, array.length - 1);
  }