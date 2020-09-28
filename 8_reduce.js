console.clear()

/*
    Just Like map() , reduce is also a function
    that loops through the array and it accepts a callback function
    the difference is reduce pass the result from one
    iteration to another
    it accepts two parameter in the callback function
    one is acculumator and second is the item
    its syntax is like this


    arr.reduce((acc,item)=>{
        // callback function body
    },default value)

    so in a reduce it itrates through the element of aray
    and in in the callback body you need to retun someting 
    it can work with the second element because it pass the callback from one to 
    another

    now we explain the sum function create with the reduce function

*/

var array1 = [1,2,3,4,5,6,7,8,9]

var SUM = (arr1)=>{
    // reduce function works here
    default1 = 0;
    var result = arr1.reduce((sum,item)=>{
        return sum+item;
    },default1);
    /*
        explaining the sum code 
        the is the variable that is going to interact with every 
        element and its default value is 0
        now in every iteration we add value with the sum
        and return it because it is then going to add with the 
        next element of the iteration
    */

    // now return the result
    return result;
}

console.log(SUM(array1))


console.clear()

/*
    you can use the reduce for normal iteration also
    if you dont use the acculutor
    // and dont retunrn anything


*/

array1.reduce((sum,item)=>{
    console.log(item);
},0)

/*
    we did not use sum 
    and we dont return anything 
    so its just dont come back and 
    dont do anything with the next item
    so now it just  anormal loop

*/