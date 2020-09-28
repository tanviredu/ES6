console.clear()
// MAP FUNCTION IS USED FOR ITERATING ARRAY
// WE MAKE ANOTHER SUM FUNCTION
// WITH THE MAP FUNCTION
// IT WILL MAKE A CALLBACK FUNCTION TO DO ITS JON
//  MAKE A SUM SUM FUNCTION
//  REGULAT FOR LOOP
const array1 = [1,2,3,4,5,6,7,8,9]
const SUM1 = (arr1)=>{
    let result = 0
    for(let i = 0;i<=arr1.length;i++){
        result += i;
    }
    return result;
}
console.log(SUM1(array1))
// DOING THE SAME THING WITH THE MAP FUNCTION
// THIS IS THE SAME THING WITH THE MAP FUNCTION
var result2 = 0
const SUM2 = (arr2)=>{
    arr2.map((item)=>{
        result2+=item;
    })
    return result2;
}

console.log(SUM2(array1));


// IT WILL ALSO WORKS WITH THE ARRAY OF ONJECTS
// this is the array object
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
        dpt  : "ECE"
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

myobj.map((student)=>{
    console.log(student.name);
    console.log(student.id);
    console.log(student.dpt);
    console.log("=============");
    
})

console.clear()

// we can make new object from this object

data = myobj.map((student)=>{
    return {
        name : student.name,
        id   : student.id
    }
})


// WE GOT ANOTHER NEW ARRAY OH NEW OBJECTS
console.log(data);