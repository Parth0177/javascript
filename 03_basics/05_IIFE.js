// Immediately Invoked Function Expression (IIFE)

// Two IIFE at Once 

(function Chai(){
     // named IIFE
     console.log("DB Connected");
     
})();


( (name)=>{
     //unnamed IIFE
     console.log(`DB IS CONNECTED TO ${name}`);
     
})('Parth')
