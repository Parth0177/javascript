h1= document.querySelector("h1")

function Changecolor(color,delay,next){
  setTimeout(()=>{
  h1.style.color=color;
  if(next) next();
},delay)
}

Changecolor("red",1000,()=>{
  Changecolor("orange",1000,()=>{
    Changecolor("green",1000,()=>{
      Changecolor("blue",1000)
    })
  })
})