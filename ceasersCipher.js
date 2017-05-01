function rot13(str) { // LBH QVQ VG!
	//str = str.toLowerCase();
	console.log(str);
   // alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
   Str =[];
   var test2="";
for(var i = 0; i< str.length; i++){
	// for(var j = 0;j < alpha.length; j++){		
	newStr = str.charCodeAt(i);
	  //console.log(newStr);
		
				if(newStr == 32){
					Str.push(32);				
				
				}else if(newStr > 96){
					Str.push(newStr);
			 	
				
				}
				else if(newStr >= 78 && newStr <= 95 ){
					Str.push(newStr - 13);
			 	
				
				}
				else{
					Str.push(newStr + 13);
				}					

		test2 += String.fromCharCode(Str[i]);
	}

	console.log(Str);
	console.log(test2);
  return test2;
}





rot13("SERR PBQR PNZC") //should decode to "FREE CODE CAMP"
rot13("SERR CVMMN!") //should decode to "FREE PIZZA!"
rot13("SERR YBIR?") //should decode to "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") //should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."

