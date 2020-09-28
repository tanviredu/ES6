console.clear()
/*
    like map or reduce filter also
    iterate through the list
    but it uses to make a new list
    from the old list based  on the condition
    so it iterates through the element od
    the array and check the condition
    if True then add to the new list 
    if false then skip
    the syntax is
    
    arr.filter((item)=>{
        // condition goes here    
    })
*/
const arr1 = [1,2,3,4,5,6,7,8,9,10]
// this will return the even numebr
const result_array = arr1.filter((item)=>{    
    // now boolean condition goes here
    // if true then added to the result
    // we add only the even number
    return item%2==0;
})
console.log(result_array);
console.clear()
/*
 this will return the odd number
 you have to write the boolian condition in 
 the return function
*/
const odd_array = arr1.filter((item)=>{
    var bool_val = (item%2!=0)
    return bool_val;    
})
console.log(odd_array);


// we can use this to filter objects
// and then make a filtered list of object

const myobj = [
    {
        name : "Tanvir",
        id   : "143000410",
        dpt  : "EEE"
    },
    {
        name : "Ornob",
        id   : "143000411",
        dpt  : "CSE"
    },
    {
        name : "Hasnat",
        id   : "143000415",
        dpt  : "EEE"
    },
    {
        name : "Rabi",
        id   : "154000430",
        dpt  : "ME"
    },
    {
        name : "HABIB",
        id   : "4320987",
        dpt  : "CE"
    }

]
console.clear();
var result = myobj.filter((item)=>{
    // it will search 
    // the student that has dpt EEE
    return item.dpt == "EEE"
})
console.log(result);