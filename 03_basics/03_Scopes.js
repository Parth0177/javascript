let a=100
const b=200   // Global Scope
var c=303

console.log(a,b,c)

if(true){
    let a=10
    const b=20    // Block Scope   
    console.log("Inner:",a,b);
    
}

