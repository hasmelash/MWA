
var fs = require('fs');
var dat;


process.on('message', (msg)=>{
    const readable = fs.createReadStream('./data.txt', {encoding:'utf-8',highWaterMark:16*1024});
    readable.on('data',chunk=>{
                dat=chunk.toString();
            }).on('end', function(){
                process.send(dat);
            });
});