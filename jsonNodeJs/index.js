const maindata={
    name:'khhghgh',
    age:23,
    college:'kingston college',
    salary:400000
}

console.log(maindata.age);
//convert json 
jsondata=JSON.stringify(maindata)
console.log(jsondata);

//write json in another file
const fs=require('fs')
// fs.writeFile('json1.json',jsondata,()=>{

// });

fs.readFile('json1.json','utf-8',(err,data)=>{
    console.log(data);
    newdata=JSON.parse(data);
    console.log(newdata);
})