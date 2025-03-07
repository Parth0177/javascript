const coding=["JS",'Ruby','Python','Java','Swift']

/*coding.forEach( function (item){
    console.log(item);
    
})*/

/*coding.forEach((item)=>{
    console.log(item);
    
})*/

/*function printMe(item){
    console.log(item);
    
}*/

//coding.forEach(printMe)


/*coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
    
})*/


const Mycoding=[{
    LanguageName:"Javascript",
    LanguageFileName:"Js"
},{
     LanguageName:"Java",
    LanguageFileName:"Java"
},{
     LanguageName:"Python",
    LanguageFileName:"Py"
}]


Mycoding.forEach((item)=>{
    console.log(item.LanguageName,item.LanguageFileName);
    
})
