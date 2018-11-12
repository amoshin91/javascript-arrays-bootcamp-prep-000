var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles',
  ];

function addElementToBeginningOfArray (chocolateBars, element) {
  return [element, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element)
  return array;
}

function addElementToEndOfArray (array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element)
  return element;
}

function accessElementInArray (array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
    array.shift(element)
    return array;
}

function removeElementFromBeginningOfArray (array) {
  array.slice(1)
  return array;
}





