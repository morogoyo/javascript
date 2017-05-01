
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var newArray = Array();

  if ( howMany === 0){
  	newArray = arr;
		

  }else if ( arr.length <= howMany) {

  	newArray = arr.slice(0,arr.lenght - howMany);

  }else{

  	newArray = arr.splice(2,howMany);

  }
  
  console.log(newArray);
  return newArray;
}

slasher([1, 2, 3], 2);
slasher([1, 2, 3,4,5,6,7,8], 1)


/*

 slasher([1, 2, 3], 2) should return [3].
slasher([1, 2, 3], 0) should return [1, 2, 3].
slasher([1, 2, 3], 9) should return [].
slasher([1, 2, 3], 4) should return [].
slasher(["burgers", "fries", "shake"], 1) should return ["fries", "shake"].
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5) should return ["cheese", 4]. 





*/