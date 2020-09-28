// SPREAD USED FOR COPY DAA
// WITHOUT REFERENCING
// BECAUSE WHEN YUN COPY DATA
// NORMAL ASSIGNMENT CREATE A REFERENCE COPY
// SO AFTER THAT ONE CHANGE IN ONE VARIABLE
// CAN AFFECT BOTH

let arr1 = [1,2,3,4,5,6,7]
let arr2  = arr1;

console.log(arr1);
console.log(arr2);
arr1.push(8);
console.log(arr1);
console.log(arr2); // because of the refrence this array will also increase


// how to deal with that?
// spread operator
let ar1 = [1,2,3,4,5,6,7]
// now if i write ...ar1 it will take the copy 
//of the calue inside the array

let ar2 = [...ar1]


console.log(ar1)
console.log(ar2)
ar1.push(8)
console.log(ar1)
console.log(ar2) // it will now increase since
                 // it is not a refrence it is a copy of the data

var data1 = [1,2,3]
var data2 = [4,5,6]
var data3 = [7,8,9]

var result = [0,...data1,...data2,...data3]
console.log(result);

let obj1 = {
    name: "john",
    
}
let obj2 = {
    age : 22
}

// it will take the 
// key value of the object
// and then add it with the obj3

let obj3 = {...obj1,...obj2}
console.log(obj3)