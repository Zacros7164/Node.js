// Native elements
// const x = 1;
// console.log(x)
// let atlTeams = [
//     "braves",
//     'falcons',
//     'hawks',
//     'united',
// ]

// console.log(atlTeams)

// ===================================

// like python, you can fetch modules.
// import DateTime
// pip install pygame
// import pygame

// ===================================

// require will go and fetch the native module, 
// like import in python

// const os = require('os');
// const cpu = os.cpus()
// console.log(cpu)
// const freemem = os.freemem()
// console.log(freemem)
// const nI = os.networkInterfaces();
// console.log(nI);

// ==========================
    // Just Express practice
// ==========================
const http = require('http');

// fs is native to Node
// it gives node access to THIS computer's file system
const fs = require('fs');

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        // the user wants the home page
        res.writeHead(200,{'content-type': 'text/html'});
        // res.write("");
        const homePageHTML = fs.readFileSync('node.html');
        res.write(homePageHTML)
        res.end();
    }else if(req.url === "/node.png"){
        res.writeHead(200,{'content-type': 'image/png'});
        // res.write("");
        const image = fs.readFileSync('node.png');
        res.write(image)
        res.end();
    }else{
        res.writeHead(404,{'content-type': 'text/html'});
        res.write("<h4>These aren't the droids you are lookng for</h4>");
        res.end();
    }

})

server.listen(3000);