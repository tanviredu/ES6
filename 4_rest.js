const mysum = (num1,num2)=>{
    console.log(num1+num2)
}
mysum(1,2,3,4,5);
// ans wil be 3
// because the rest of the infomation 
// will be ignored


// but sometimes you need to write function
// but yo dont know the size of the argument
// then you use the rest parameter
// this will make the size of the parameter dynamic

const fun1 = (...args)=>{
    console.log(args)
}

// now apply this function with multiple value
fun1(1,2,3,4,5,6,7,8)
fun1(1,2,3)

const fun2 = (...args)=>{
    // find the sun of the function using reduce functiopn
    var ss = args.reduce((a,b)=>a+b,0)
    console.log(ss);
}   
fun2(1,2,3,4,5,6,7,8)
fun2(1,2,3)


// make a sun function with the rest parameter
const Sum = (...args)=>{
    // reduce function
    // will take the array and find the sum
    var ss = args.reduce((a,b)=>{
        return a+b
    },0)
    // 0 i the default value
    // ss is returned SUM    
    return ss;
}


sum1 = Sum(1,2,3,4,5,6,7,8)
sum2 = Sum(1,2,3)

console.log(`First Sum ${sum1}`);
console.log(`Second Sum ${sum2}`);


const mysum2 = (...args)=>{
    let sum = 0;
    for (let i=0;i<args.length;i++){
        sum+=args[i]
    }

    return(sum)
}

sum1 = mysum2(1,2,3,4,5,6,7,8)
sum2 = mysum2(1,2,3)

console.log(`First Sum ${sum1}`);
console.log(`Second Sum ${sum2}`);



const mysum3 = (num1,num2,...args)=>{
    //console.log(num1);
    //console.log(num2);
    //console.log(args);

    // now we use the args 
    // for fetching the parameter except 
    // the first two num1,num2
    var ss = args.reduce((a,b)=>{
        return a+b
    },0)
    return ss;

}


// it will take the first two
// and then start summing the rest of the value
sum1 = mysum3(1,2,3,4,5,6,7,8)
sum2 = mysum3(1,2,3)
console.log(`First Sum ${sum1}`);
console.log(`Second Sum ${sum2}`);


// REMEMBER REST PARAMETER MUST BE THE LAST PARAMETER
// YOU CAN USE IT IN THE FIRST PARAMETER




