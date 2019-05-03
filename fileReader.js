var fs = require('fs');
var dat;
const fileReader = function(){

   const readable = fs.createReadStream('C://data.txt', {encoding:'utf-8',highWaterMark:16*1024});
   return readable.on('data',chunk=>{
                  dat=chunk;
    // console.log(chunk);
                  return dat;

               });




};

process.on('message', (msg)=>{
   const data = fileReader();
// console.log(data);
   process.send(data);
});