
function largestOfFour(arr) {
  var num =0;
  var newArray = Array();
  
		 for(var i = 0; i < arr.length; i++ ){// loops over main array
		 		var count = 0;		 		
		     for(var j = 0; j < arr[i].length; j++ ) { //loops thru the arrays with in the arrays
		     		num= arr[i][j];// sets the value at that indext to variable num 
		     		if (num > count){
		     			count = num;
		     		      
		     		}
		          }
		       
		       newArray.push(count);  //inserts the value of count in to the newArray 
		 }
		  console.log(newArray); // just a test 
		  
		  return newArray;
		}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
