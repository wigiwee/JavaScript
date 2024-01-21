const http = require("http")
const fs = require("fs")
const url = require("url")
const express = require("express");

const app = express();
app.get('/' , (req, res)=>{
    return res.send("Hello from home page");

});
app.get("/about", (req,res)=>{
    return res.send(`Hello ${req.query.name}, you are ${req.query.age}`);
})
function myhandller(req, res){
        if (req.url == "/favicon.ico") req.end();
    const log =  `${Date.now()}:${req.method}`+` ${req.url}` + " new request recieved\n";
    const myurl = url.parse(req.url,true);
    console.log(myurl);
    fs.appendFile("log.txt", log , (err, data) => {
        switch(myurl.pathname){
            case "/": res.end("Homepage");
                break;
            case "/about" :
                const username = myurl.query.username    
                res.end(`Hii my name is ${username}`);
                break;
            default: res.end("404 not found");


        }

    });
}
app.listen(8000,()=>console.log("Server Started"))
//const myServer = http.createServer(app);
//myServer.listen(8000, ()=> console.log("Server Started"));
