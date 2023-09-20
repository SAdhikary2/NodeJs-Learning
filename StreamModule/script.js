const fs=require('fs');
const http=require('http');

const server= http.createServer();

server.on('request',(req,res)=>{

    //IST WAY NORMAL METHOD TO READ AND WRITE TO THE BROWSER
    // fs.readFile('input.txt',(err,data)=>{
    //     if(err) return console.error(err);
    // res.end(data.toString());
    // });




//READING DATA IN STREAMING MODE
//2ND WAY
// const rstream = fs.createReadStream('input.txt');

// rstream.on('data',(chunkdata)=>{
//     res.write(chunkdata)
// });

// rstream.on('end',()=>{
//     res.end();
// });

// rstream.on('error',(err)=>{
// console.log(err)
// res.end('File not Found');
// })





//3RD WAY  TO STREAM IN BROWSER

const rstream = fs.createReadStream('input.txt');
rstream.pipe(res);

});

server.listen(8000,'localhost')