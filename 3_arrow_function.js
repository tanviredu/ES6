console.clear()
function greetings(name){
    return `welcome ${name}`
}
console.log(greetings("Tanvir"))

// same thing with the arrow function


var greetings2 = (name)=>{
    return `Welcome ${name}`
}

console.log(greetings2("Tanvir"))


// same thing with more compact version
const myGreetings = name => `Welcome ${name}`;

console.log(myGreetings("Tanvir Rahman"))