const { log } = require('console');
const fs =require('fs');
fs.writeFile("read.txt","My name is sukalyan Adhikary",(err)=>{
    console.log("successfully witten");
    console.log(err);
})

fs.readFile('read.txt','utf-8',(err,data)=>{
    console.log(data);
});