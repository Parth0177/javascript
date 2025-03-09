const myNumbers=[1,2,3,4,5,6,7,8,9,10]
const num10=myNumbers.map((num)=>{return num+10})
console.log(num10);

let newNums=myNumbers.map((num)=>num+20)
console.log(newNums);

/*let newnums2=myNumbers.filter((num)=>num+10)
console.log(newnums2);*/

let num3=myNumbers.forEach((num)=>{console.log(num+30)})


// CHAINING///

const newnums2= myNumbers
            .map((num)=>num*10)
            .map((num)=>{return num+1})
            .filter((num)=>num<=40)
console.log(newnums2);
