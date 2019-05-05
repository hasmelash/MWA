var express = require('express');
var axios = require('axios');
//var JSON = require('');
var app = express();
var port = 4000;
app.set('trust proxy', true);
app.enable('trust proxy');
app.enable('case sensitive routing');
app.set('strict routing', true);
app.set('x-powered-by', false);
app.disable('etag');
//app.use(cacheControl({maxAge: }));
app.get('/users', async function(request, response){
    try{
        response.status(200);
        response.set('Content-Type', 'text/html');
        const data = await axios.get('https://randomuser.me/api/?results=10');
        console.log(data);
        data.data.results.forEach(function (item) {
            console.log(item.gender);
        })
        response.send(data.data.results);
        response.end();
    }catch(err){
        console.log(err);
    }
});
app.listen(port, function(){
    console.log('hello %s', port);
})