const http=require('http');
const url=require('url');
const fs=require('fs')



const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end('home page');
    }
    else if(req.url=='/about'){
       res.write('this is the about page');
       res.end()
    }
    else if(req.url=='/contact'){
        res.end('this is the contact page')
    }

    else if(req.url=='/api'){
       fs.readFile(`${__dirname}/uerApi/userapi.json`,'utf-8',(err,data)=>{
        console.log(data);
        console.log(__dirname);
        objdata=JSON.parse(data)
        res.writeHead(200,{'content-type':'application/json'})
        res.end(data)
      
 
       });
      
    }

    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.end('<h1>404 error</h1>')
    }
});

server.listen(8000,'localhost',()=>{
 console.log('listining on the port 8000');
})