
var http = require('http');
var fs = require('fs');
var dat;

fs.readFile('C://data.txt', function(err,data){
    if(err){
        throw err;
    }
    dat=data;
});

var server = http.createServer(function(request,response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(dat);
});
server.listen(4000);