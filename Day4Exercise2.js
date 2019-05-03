const http=require('http');
const{fork}=require('child_process');
const server = http.createServer();
const url=require('url');
server.on('request', (req,res)=>{
    const childProcess = fork('./fileReader.js');
    childProcess.send('start');
    childProcess.on('message', data=> {
        if(req.url === '/data'){
            res.writeHead(200, {"Content-Type": 'text/plain'});
            res.write(data.toString());
            res.end();
        };
    });
}).listen(4000);