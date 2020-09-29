

//   NOW IN ES6 THE INHERITENCE ITS QUITE LIKE THE JAVA
//   WHEN THE CONSTRUCTOR OF THE CHILD CLASS CONSTRUCTOR
//   IT USES THE SUPER KEYWORD

// 1_ MAKE A CLAS

class Vehicle{
    constructor(name,type){
        this.name = name;
        this.type = type
    }

    
    getName(){
        return this.name;
    }

    getType(){
        return this.type
    }


}

// 2_ INIT THE CLASS AND CREATE THE OBJECT

// let car = new Vehicle("Tesla",'car')

// console.log(car.getName())
// console.log(car.getType())



//  IF YOU GO TO THE BABLE IT WILL RETURN IN THE OLDER JAVASCRIPT
//  LIKE THIS 
// THIS IS FUNCTION BASED
var Vechicle1 = function(name,type){
    this.name = name;
    this.type = type;

    this.getName = ()=>{
        return this.name;
    }
    this.getType = ()=>{
        return this.type
    }
}

// var bus = new Vechicle1('Tesla Bus',"Bus")
// console.log(bus)
// console.log(bus.getName())
// console.log(bus.getType())




// NOW LETS WORK WITH THE INHERITENCE
// NOW WE USE THE EXTENDS KEYWORD

console.clear()
class Cycle extends Vehicle{

    constructor(name,type,engine){
        // this is calling the parent class constructor
        super(name,type)
        this.name = name;
        this.type = type;
        this.engine = engine; // this is new proerty only yhe cycle
        
        
    }
        // we write and additional methd

        getCost(){
            return `${this.name} is very cheap`
        }

}

var c1 = new Cycle("phonix",'mountain bike','No engine')
console.log(c1);
console.log(c1.getName())  // INHERITED
console.log(c1.getType())  // INHERITED
console.log(c1.getCost())  // Cycle method
// NOW IF WE 



