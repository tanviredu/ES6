console.clear()


/*  

    find is almost similler 
    like the filer
    just filter return all the value that 
    matches the condition in a list
    but find return the first one




    if you search for EEE department 
    then filter returns two items but 
    the find will return the first EEE

*/


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

console.clear()
var result = myobj.find((item)=>{
    return item.dpt == "EEE";
})

console.log(result);

/* 
    find index does the same job
    but it return the index of the result rather than
    actual result
*/


console.clear()
var result = myobj.findIndex((item)=>{
    return item.dpt == "ABCDE";
})

/*  this should return 0 cause first element 
    is a match
    if does not match then it returns a -1
*/


// this will return a -1
console.log(result);


