const path=require('path');
const { PassThrough } = require('stream');

console.log(path.dirname('E:/FullStack Web dev/Node Js/pathModule/index.js'));
console.log(path.extname('E:/FullStack Web dev/Node Js/pathModule/index.js'));
console.log(path.basename('E:/FullStack Web dev/Node Js/pathModule/index.js'));

const mypath=path.parse('E:/FullStack Web dev/Node Js/pathModule/index.js');
console.log(mypath);
console.log(mypath.name);
console.log(mypath.base);