function findLongestWord(str) {
  var count =0;
  var arr = str.split(' ');// make in to an array
  console.log(arr);
  for (var i =0; i < arr.length; i++){ // looping thru the array
      if (count < arr[i].length){
         count = arr[i].length;
          
    }
  }
  
  return count;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
