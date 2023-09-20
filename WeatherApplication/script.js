const http=require("http");
const fs=require("fs");
var requests=require('requests');

const homeFile=fs.readFileSync('index.html','utf-8')

const server=http.createServer((req,res)=>{
    if (req.url=='/'){
        requests("https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=f788c8a5447e59c5b1aa7e8a9da55eb6")

        .on('data',(chunk)=>{
            console.log(chunk);
        })
        .on('end',(err)=>{
            if(err) return console.log('connections closed due to errror',err);

            console.log('end');
        });
    }




    //THIS IS THE ANOTHER WAY
// if (req.url=='https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=f788c8a5447e59c5b1aa7e8a9da55eb6')
// {
//     res.end()
// }


});

server.listen('8000','localhost');

