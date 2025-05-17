function savetoDb(data , success , failure){
  let internetSpeed = Math.floor(Math.random()*10)+1;
  if(internetSpeed > 4){
    success();
;  }else{
    failure();
  }
  
}

savetoDb("Myself Parth", 
  ()=>{
  console.log("Your data was saved");
},
()=>{
  console.log("weak Coonection");
    }
  )