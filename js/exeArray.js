/*
var headerRole = HTMLheaderRole.replace('%data%','Web Developer') ;
$("#header").prepend(headerRole);
var headerName = HTMLheaderName.replace('%data%','Lei Wang') ;
$("#header").prepend(headerName);
*/
var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
  var newArray = [];
  // Your code should make newArray equal to an array that has the same
  // values as _array, but the last number has increased by one.

  // For example:
  // _array = [1, 2, 3];
  // turn into:
  // newArray = [1, 2, 4];

  // Your code goes in here!
  for(var i=0;i<_array.length-1;i++){
    newArray.push(_array.pop());
  }

  newArray.push(_array.pop()+1);

  // Don't delete this line!
  return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));