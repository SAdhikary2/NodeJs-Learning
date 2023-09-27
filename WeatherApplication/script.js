const http=require("http");
const fs=require("fs");
var requests=require('requests');
const { log } = require("console");

const homeFile=fs.readFileSync('index.html','utf-8');

const replaceVal=(tempval, orgval)=>{
let temparature=tempval.replace('{%tempval%}',orgval.main.temp);

temparature=tempval.replace('{%tempmin%}',orgval.main.temp_min);

temparature=tempval.replace('{%tempmax%}',orgval.main.temp_max);
temparature=tempval.replace('{%country%}',orgval.sys.country);

temparature=tempval.replace('{%location%}',orgval.main.name);

return temparature;

}



const server=http.createServer((req,res)=>{
    if (req.url=='/'){
        requests("https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=f788c8a5447e59c5b1aa7e8a9da55eb6")

        .on('data',(chunk)=>{
            const objdata=JSON.parse(chunk);
            const arrData=[objdata]
            // console.log(arrData[0]);

            //value replacing
            const realTimeData=arrData.map((val)=>replaceVal(homeFile,val)).join('');
                // console.log(val.main);
                res.write(realTimeData);
                // console.log(realTimeData);
              
            
        })
        .on('end',(err)=>{
            if(err) return console.log('connections closed due to errror',err);

          res.end();
        });
    }




    //THIS IS THE ANOTHER WAY
// if (req.url=='https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=f788c8a5447e59c5b1aa7e8a9da55eb6')
// {
//     res.end()
// }


});

server.listen('8000','localhost');

