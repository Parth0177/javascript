//fetch('https://something.com').then().catch().finally()

//const promise= new Promise()

const promise1=new Promise((resolve,reject)=>{
    //Do an async task
    // DB calls , Cryptography, network calls
    setTimeout(()=>{
        console.log("Async task 1  is complete");
        resolve()
        },1000)
})

promise1.then(()=>{
    console.log("Promise consumed");
    
})




new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("async task 2 is complete");
        resolve()
        
    },2000)
}).then(()=>{
    console.log("Promise Consumed");
    
})





const promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:"Parth",
            email:"parthtiwari670@gmail.com",
            mob: 8858727873
        })
    },3000)
})

promise3.then((user)=>{
    console.log(user);
    
})






const promise4= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true
        if(!error){
            resolve({username:"Parth Tiwari",password:"123"})
        }else{
            reject('ERROR : Something went wrong')
        }
    },4000)
})


promise4.then((user)=>{
    //console.log(user);
    return user.username
    
}).then((username)=>{
    console.log(username);
    
}).catch((error)=>{
    console.log(error);
    
}).finally(()=>console.log("the promise is finally resolved!!"));



// +++++++++++++ ASYNC AWAIT ++++++++++++++++


const promise5 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username:"Parth",pass:"123"})
        }else{
            reject('Error: Something is very wrong!')
        }
    },5000)
})
async function cosumepromise5() {
    try {
        const response=await promise5
        console.log(response);
    } catch (error) {
        console.log(error);        
    }    
}
cosumepromise5()





/*async function getAllUsers() {
        try {
            const response= await fetch('https://jsonplaceholder.typicode.com/users')
            const data= await response.json()
            console.log(data);
        }catch (error) {
            console.log("E:",error);
        
        }

}
getAllUsers()*/


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>console.log(error))