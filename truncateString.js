
function truncateString(str, num) {
  // Clear out that junk in your trunk
  // console.log(str,num,str.length);

if (num <= 3){
	str1 = str.slice(0, num);
	
	 str1 +="...";
	 console.log(str1);
	 return str1;


}else if (num >= str.length){
	console.log(str);
	return str;
}
else{

   str1 = str.slice(0, num - 3 )
   str1 += "...";
   console.log(str1);
   return str1;
	}
  }

truncateString("A-tisket a-tasket A green and yellow basket", 11);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
truncateString("Absolutely Longer", 2);
truncateString("A-", 1);
truncateString("Peter Piper picked a peck of pickled peppers", 14);