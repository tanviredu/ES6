console.clear()
const myname = "Tanvir rahman Ornob";
// now exploding it to array
// based om the space
const namearray = myname.split(' ');
console.log(namearray);
let firstName = namearray[0]
let lastName  = namearray[1]
console.log(firstName);
console.log(lastName);
let [fname,lname,nickname] = myname.split(' ')
console.log(fname)
console.log(lname) 
// suppose you want just the lastname and the middle name
let [,lastname,nikname] = myname.split(' ')
// if you dont want any value just leave blank
console.log(lastname)
console.log(nikname)
// for object you need a curly braces for 
// destructuring
// making an object
const person = {
    firstname1 : "Tanvir",
    lastName  : "Rahman",
    id        : "143000410",
    age       : "25"
}

console.clear()
console.log(person);


// lets destructure it
// we need only the First Name and the id
// here the sequence does not matter 
// only the name should be an exact match
// REMEMBER WHEN YOU WORK WITH THE OBJECT
// YOU HAVE TO USE THE EXACT NAME
// AND SEQUENCE IS NOT IMPORTANT
console.clear()
let {firstname1,id} = person;
console.log(firstname1)
console.log(id)

