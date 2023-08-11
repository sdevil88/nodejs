//include library 
// const http = require("http");
// const { endianness } = require("os");
//file include 
//const summ = require("./sum");

//create function 
//const func=(req,res)=>{
//     const data = summ.sum();
//     res.end(`sum is ${data}`);
// };
// port = 8080;
// http.createServer(func).listen(port);
// console.log("server running");




//qr print in terminal 

// const qrCode = require("qrcode");
// const data = "https:www.youtube.com"
// qrCode.toString(data,{type:'terminal'}, function (err, url) {
//     console.log(url)
//   })


//qr generator


// const qrCode = require("qrcode");
// const http = require("http");

// http.createServer(async (req,res)=>{
//     res.writeHead(200,{'content-type': 'text/html'});
//     const data = "https://github.com"
//     const qrData = await qrCode.toDataURL(data);
//     const htmlData = "<img src='"+qrData+"'/>"
//     res.write(htmlData);
//     res.end();
// }).listen(8080)
// console.log("server is running ");













