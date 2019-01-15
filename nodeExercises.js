const fs = require('fs');

let name = process.argv.slice(2);
// console.log(name)
let file = fs.readFile(name[0], "utf-8",(err,data)=>{
    if(err) throw err;
    else{
        console.log(data.toUpperCase())
    }
})

