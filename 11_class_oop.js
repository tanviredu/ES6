/* MAKE OOP IN TRADITIONAL FUNCTION BASED 
   THEN WE WROTE IT IN A ES6 VIEW
*/

/*
    HOW IT IS POSSIBLE TO WRITE  A CLASS WIT FUNCTION KEYWORKD
    BECAUSE TJAVASCRIPT SUPPORT THE FIST CLASS FUNCTION
    FUNCTION WILL WORK LIKE A VARIABLE AND YOU CAN 
    ASSIGN A FUNCTION IN  AVARIABLE THATS WHY IT CAN BE DONE
*/

function Person(name,birthday){
    this.name = name
    this.birthday = birthday

    this.getDetails = () =>{
        return `Name ${this.name} and birthday : ${this.birthday}`
    }
}

var john = new Person("Tanvir",27);
console.log(john.getDetails())




/* WE CAN GENERATE SAME THING WITH THE CLASS SYNTACTIC SUGER */

console.clear()

class Person1{
    constructor(name,birthday){
        this.name = name;
        this.birthday = birthday
    }

    // YOU SHOULD NOT WRITE WRITE ANONYMOUS FUNCTION 
    // INSIDE ES6 CLASS THIS IS FOR FUNCTION BASED
    // INSTED OF THIS WRITE THIS  TYPE OF METHOD DEFINITION  

   getdetails(){

   }

}

var tanvir = new Person1("Tanvir",20)
console.log(tanvir)