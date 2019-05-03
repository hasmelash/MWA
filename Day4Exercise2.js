const http=require('http');
const{fork}=require('child_process');
const server = http.createServer();

server.on('request', (req,res)=>{
    const childProcess = fork('fileReader.js');
    childProcess.send('start');
    childProcess.on('message', data=>{
        console.log("This is my data"+data.toString());
        res.write(data,'utf-8');
    });
}).listen(3000);