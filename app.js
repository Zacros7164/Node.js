const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    if(req.url == "/"){
    // res.end('<h1>sanity check</h1>')
    res.writeHead(200, {"content-type": "text/html"});
    const homepageHTML = fs.readFileSync('node.html');
    res.end(homepageHTML)
    }else if(req.url == "/node.png"){
        res.writeHead(200, {"content-type": "image/png"});
        const image = fs.readFileSync("node.png");
        res.end(image);

    }else{
        res.writeHead(404, {"content-type":"text/html"});
        res.write("<h1>These are not the droids you are looking for!</h1>")
        res.end()
    }
})

server.listen(3000)