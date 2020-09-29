// WE PRACTICE THE ASYNC PATTERN IN JS
// WITH AXIOS

const axios = require('axios').default

// GET SOME VALUE WITH ASYNC PATTERN
// AND REMEMBER AXIOS IS PROMISE BASED


// axios.get('https://jsonplaceholder.typicode.com/posts')
// .then((resp)=>{
//     console.log(resp)
// }).catch((err)=>{
//     console.log(err);
// })

// console.clear()

// WHEN WE USE ASYNC AND AWAIT
// WE CAN WORK LIKE THE TRADITIONAL 
// PROGRAM BUT YOU HAVE TO ENCLOSE THE STATEMENT 
// INSIDE A FUNCTION

const getPOST = async ()=>{
    try{
        const resp = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(resp)
    }catch (err){
        console.log(err);
    }
    
}

//getPOST()

console.clear()


// MAKING A POST REQUEST
// WITH ASYNC AND AWAIT


samplePost =  { 
    Id: 1,
    title: 'This is a sample Title',
    body: 'This is a sample post'
    } 

const postPOST = async ()=>{
    try{
        const resp = await axios.post('https://jsonplaceholder.typicode.com/posts',samplePost)
        console.log(resp.data);
    }catch(err){
        console.log(err)
    }
}

postPOST()