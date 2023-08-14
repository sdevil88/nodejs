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





//weather apt using package axios and open source weather url link d

const axios = require("axios");
async function getUser(url){
    try{
        const { data } = await axios.get(url);
        const { daily } = data;
        return { sunrise:daily.sunrise, sunset:daily.sunset };
    }
        catch (error) {
            console.erro(error);
        } 
    }

    const url = "https://api.open-meteo.com/v1/forecast?latitude=27.70&longitude=85.32&hourly=temperature_2m&daily=sunrise,sunset&forecast_days=1&timezone=auto"

    async function solve(){
        const sunrise = await getUser(url)
        console.log({ sunrise });
    }


    solve();




















