const http = require("http");
const date =require("./sum");
const myfunction = (req,res) =>
{
    const DateTime = Date();
    res.end(`hello world ${DateTime}`);
};

http.createServer(myfunction).listen(8080);
console.log("app is running on port number : 8080");

