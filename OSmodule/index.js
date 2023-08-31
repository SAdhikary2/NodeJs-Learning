const { log } = require('console');
const os=require('os');

console.log(os.arch());
console.log(os.freemem());
const freememory=os.freemem();
console.log(`${freememory/1024/1024/1024}`);
const totalmemory=os.totalmem();
console.log(`${totalmemory/1024/1024/1024}`);
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());