const myObject={
    js:'Javascript',
    cpp:'c++',
    rb:'ruby',
    swift:"swift By Apple"
}

/*for (const key in object) {
    }
}*/
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]} `);    
    }


const my_arr=['JS','Python','Ruby','Java','Php']
 for (const key in my_arr) {
        console.log(`${my_arr[key]} is at ${key} position `);
}


/*const map=new Map()
map.set('IN',"India")
map.set("USA","United States of America")
map.set("PAK","Pakistan")
map.set("Fr","France")

for (const [key,value] in map) {
    console.log(key,":-",value);
    
}*/

