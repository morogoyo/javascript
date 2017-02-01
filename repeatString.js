
function repeatStringNumTimes(str, num) {
  // repeat after me
  var word = "";
    if (num < 0){
  
  return "";
 }else{
 	for (var i = 0; i < num; i++){
 		word += str;
  }
 }
 return word;
 console.log(word);
}

repeatStringNumTimes("abc", 3);
