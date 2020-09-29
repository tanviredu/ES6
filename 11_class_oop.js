/* MAKE OOP IN TRADITIONAL FUNCTION BASED 
   THEN WE WROTE IT IN A ES6 VIEW
*/

/*
    HOW IT IS POSSIBLE TO WRITE  A CLASS WITH FUNCTION KEYWORKD
    BECAUSE JAVASCRIPT SUPPORT THE FIST CLASS FUNCTION
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
    // JUST THE NAME OF THE METHOD NO FUNCTION KEYWORD
    // OR ANY KIND OF ANONYMOUS FUNCTION OR FIRST CLASS
    // FUNCTION  

   getdetails(){
       return `Name ${this.name} and his birthday ${this.birthday}`

   }

}

var tanvir = new Person1("Tanvir",20)
console.log(tanvir.getdetails());
console.clear()


// print tow  object and see the difference

console.log(john) 
//  in the function based object here the function listed as a variable
//  in  a key value pair

console.log(tanvir) 

// this case it does not

console.clear()


// same type of output but its a little diferent
// how it represent
console.log(john.getDetails())
console.log(tanvir.getdetails())



console.clear()

// CAN WE MAKE A OBJECT FROM A CLASS
// WITH OUT THE NEW KEYWORD
// USING THE STATIC METHDO


class Vehicle2{
    constructor(name,type){
        this.name = name;
        this.type = type;
    }
    getName(){
        return this.name;
    }
    getType(){
        return this.type
    }

    // THIS STATIC METHOD WILL CREATE THE CLASS
    // THIS IS STATIC SO IT WILL BE CALLED WITH THE CLASS NAME
    // DEPENDENCY INJECTION
    static create (name,type){
        return new Vehicle2(name,type)
    }
}


var taxi = Vehicle2.create("cng",'motorize');
console.log(taxi)
console.log(taxi.getName())
console.log(taxi.getType())



// GETTER AND SETTER

class Car {

    // WITH CONVENTION THE _ PREFIX IS USED 
    // FOR TEMPORARY ASSIGNMENT 

    constructor(name){
        this._name = name;
    }

    set name(name){
        this._name = name;
    }
    get name(){
        return this._name
    }


    // THIS IS A CLASS METHOD
    static create(name){
        return new Car(name)
    }
    
}

console.clear()
let car = Car.create('BMW');
console.log(car)



