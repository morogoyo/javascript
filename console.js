function confirmEnding(str, target) {
    var count =target.length;
    console.log("rene");
    console.log(str);
    console.log(target);
    console.log(str.substr(-count) );
     var test = str.substr(-count);
    
   if (test === target){
     
     console.log("this is in the if statement "+true);
     
     
     
   }else {
     
     console.log( false);
   
   }
  // console.log(test);
 
}

confirmEnding("Bastian", "n");