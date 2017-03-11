function chunkArrayInGroups(arr, size) {
	var newArray = Array();
  for(var i = 0; i < arr.length;i++ ){
  	if (i == size){
  		arr.slice(0,i);
  		newArray.push()
  	}
  }
  console.log(newArray);
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
