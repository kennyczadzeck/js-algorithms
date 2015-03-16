// Example array for testing
var testArray = [1, 2, 4, 5, 3, 4, 34, 46, 7234, 46, 3, 6, 8, 9, 6, 46, 34, 6, 4];

// recursively breaks array into two pieces until array is a single value, and then calls merge
var mergeSort = function(array) {
  if(array.length < 2) {
    return array;
  }

  var middle = Math.floor(array.length / 2),
    left = array.slice(0, middle),
    right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

// merges two arrays
var merge = function(left, right) {
  var results = [],
    indexL = 0,
    indexR = 0;

  while(indexL < left.length && indexR < right.length) {
    if(left[indexL] < right[indexR]) {
      results.push(left[indexL]);
      indexL++;
    } else {
      results.push(right[indexR]);
      indexR++;
    }
  }

  return results.concat(left.slice(indexL)).concat(right.slice(indexR));
};