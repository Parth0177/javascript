function savetoDb(data){
  let internetSpeed = Math.floor(Math.random()*10)+1;
  if(internetSpeed > 4){
    console.log("Your Data was saved!", data);
  }else{
    console.log("Weak Connection , Data not saved");
    
  }
  
}

savetoDb("Myself Parth")