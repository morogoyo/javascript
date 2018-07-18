function convertToRoman(num) {
    strNum = num.toString();
    let romanNumeralsKeeper = [];
    decimals = [1,2,3,4,5,6,7,8,9];

romanOnes = ["I","II","III","IV","V","VI","VII","VIII","IX"];
 								
// tens =[10,20,30,40,50,60,70,80,90]
romanTens = ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
 								
// hundred = [100,200,300,400,500,600,700,800,900]
romanHundred =["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];


switch( strNum.length){
    case 4:
        count = 0;
        while(count < strNum.charAt(0)){
            romanNumeralsKeeper.push("M")
            count ++;
        }
        if(strNum.charAt(1) != 0){
            romanNumeralsKeeper.push(romanHundred.indexOf(strNum.charAt(1)+1));

        }
        romanNumeralsKeeper.push(romanTens[strNum.charAt(2+1)]);
        romanNumeralsKeeper.push(romanOnes[strNum.charAt(3+1)]); 
    break;

    case 3:                
    romanNumeralsKeeper.push(romanHundred[strNum.charAt(0)]);
    romanNumeralsKeeper.push(romanTens[strNum.charAt(1)]);
    romanNumeralsKeeper.push(romanOnes[strNum.charAt(2)]);
    break;

    case 2:
    romanNumeralsKeeper.push(romanTens[strNum.charAt(0)]); 
    romanNumeralsKeeper.push(romanOnes[strNum.charAt(1)]);
    break;

    case 1:
    romanNumeralsKeeper.push(romanOnes[strNum.charAt(2)]);  
    break; 

} 


number = romanNumeralsKeeper.join("");
   console.log(number);
    return number;
   }
   
   convertToRoman(3500);