function convertToRoman(num) {
    
    // convert input to string
    let numeral = num.toString();
    console.log(typeof(numeral));
    //select characters
    var number = 0;
    let len = numeral.length;
    console.log(len ,'lenth');

    
        if(len === 1){
           oneDigit(numeral);            
        }
   


    // convertion logic
    console.log(number);
    
    
    function oneDigit(n){
        let romanNumeral = ["I","II","III","IV","V","VI","VII","VIII","IX"];
        console.log(romanNumeral.length);
        for(let i = 0; i <= romanNumeral.length ; i++){
            // console.log(i);
            if (numeral == i){
                console.log(i);
                number = romanNumeral[i-1];
                               
            }
        }
    }
   
    
    return num;
   }
   
   convertToRoman(5);