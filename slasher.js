function slasher(arr, howMany) {
  var test = arr.slice(howMany);
  console.log(test);
  
  return arr;
}

slasher([1, 2, 3], 2);
slasher([1, 2, 3], 0);
slasher([1, 2, 3], 9);
slasher([1, 2, 3], 4);
slasher([1, 2, 3], 1);