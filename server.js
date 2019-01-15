// http is native to Node

const http = require('http');
// console.log(http);

// createServer takes 1 arg.
// a function to run when someone makes
// an HTTP connection to this program

// This function takes 2 args (request and response) 
// which are objects

const server = http.createServer((req, res)=>{
    console.log("Someone hit our HTTP server");
    // console.log(req);
    res.end('<h1>Goodbye, World!</h1>');
});

server.listen(3000);