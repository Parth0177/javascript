
// +++++++++++++++++++ Numbers ++++++++++++++++

const score = 300

const balance = new Number(250)

console.log(balance);
console.log(score);

console.log(balance.toString());
console.log(balance.toFixed(1));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++++++++++ Maths +++++++++++++++

console.log(Math);

console.log(Math.abs(-78));

console.log(Math.round(4.8));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));

console.log(Math.min(8,4,6,2,4,7,8,9));


console.log(Math.random());
console.log(Math.random()*10+1);

const min=10
const max=20

console.log(Math.floor(Math.random() * (max-min+1))+min)
