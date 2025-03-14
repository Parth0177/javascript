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

const username=promise4.then((user)=>{
    console.log(user);
    return user.username
})
