function savetoDb(data){
  return new Promise((resolve,reject)=>{
    let internet = Math.floor(Math.random()*10)+1;
    if(internet>4){
    resolve("Success:data was saved")}
    else{
      reject("Failure:data was not saved")
    }
  })
}

savetoDb("hello")
.then(()=>{
  console.log("promise was resolved");
})
.catch(()=>{
  console.log("promise was rejected");
  
})