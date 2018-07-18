//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
for (let i = 0 ; i< contacts.length;i++){
    if(contacts[i]['firstName'] === name){
     if(contacts[i].hasOwnProperty(prop)){
         console.log(contacts[i].hasOwnProperty(prop));
        console.log(contacts[i][prop]); 
        return contacts[i][prop];
        }else{
            console.log("No such property"); 
            return "No such property"
                }
    }
}
console.log("No such contact"); 
return "No such contact"
}
// Only change code above this line

// Change these values to test your function
// lookUpProfile("Akira", "likes");//
lookUpProfile("Kristian", "lastName");// should return "Vos"
// lookUpProfile("Sherlock", "likes" );//should return ["Intriguing Cases", "Violin"]
// lookUpProfile("Harry","likes" );//should return an array
// lookUpProfile("Bob", "number" );//should return "No such contact"
// lookUpProfile("Bob", "potato" );//should return "No such contact"




