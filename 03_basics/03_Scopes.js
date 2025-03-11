let a=100
const b=200   // Global Scope
var c=303

console.log(a,b,c)

if(true){
    let a=10
    const b=20    // Block Scope   
    console.log("Inner:",a,b);    
}

function one(){
   const username="Parth"
   
   function two(){
    const website="Youtube"
    console.log(username);
    
   }
   //console.log(website);
    two()
   
}
one()


if(true){
    const username="Parth"
    if(username==="Parth"){
        const website=" Youtube"
        console.log(username + website);
        
    }
}

//++++++++++++++++ Intersesting +++++++++++++++
addone(5)
function addone(value){
    return value+2
}


const addTwo=function(value){
    return value+4
}

addTwo(6)