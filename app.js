// const http = require("http");
// const date =require("./sum");
// const myfunction = (req,res) =>
// {
//     const DateTime = Date();
//     res.end(`hello world ${DateTime}`);
// };

// http.createServer(myfunction).listen(8080);
// console.log("app is running on port number : 8080");


const http = require("http");
const file =  require("./sum");

const func =(req,res)=>{
    const sum = run();
    res.end(`hello ${sum}`);
}
http.createServer(func).listen(8080);
console.log("it is running ");


