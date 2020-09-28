// in es6 to use template string
// you need to use the backtics
const firstName = "john"
const greeting = `Hello ${firstName}`;
console.log(greeting)


// you can pass the value in it
// we can use the first class function
// we can use the arrow function
getFullName = (firstname,lastname)=>{
    var fullName = firstname + ' ' +lastname;
    return fullName

}
var fullname = getFullName("Tanvir","Rahman")
console.log(fullname)


// we can us eit inside the template string
const greeting2 = `Hello ${getFullName('Tanvir','Rahman')}`;
console.log(greeting2)

// make another rgba for templating
let red   = 200;
let green = 300;
let blue  = 400;
let alpha = 500;

// make the template string
// we have to use the bactics for that

const rgbaexpression = `rgba(${red},${green},${blue},${alpha})`;
console.log(rgbaexpression);
