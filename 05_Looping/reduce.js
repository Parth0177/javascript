const myNums=[1,2,3,4]

const myTotal=myNums.reduce(function(acc,currVal){
    return acc+currVal
},0)
console.log(myTotal);


const myChar=["P",'a','r','t','h']

const mytotal2=myChar.reduce((acc1,currentVal)=>acc1+currentVal)
console.log(mytotal2);

//console.log(myChar);


const shoppingCart=[
    {
        itemName:'js course',
        price:2999
    },
    {
        itemName:'java course',
        price:3999
    },
    {
        itemName:'Python course',
        price:1999
    },
    {
        itemName:'Css3 course',
        price:5999
    }
]

const output= shoppingCart.reduce((acc,item)=>item.price+acc,0)
console.log(`Price to pay of all courses is: ${output}`);

