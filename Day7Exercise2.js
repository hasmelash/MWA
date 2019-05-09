const express= require('express');

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://homework01:homework01@ds233806.mlab.com:33806/homework01', {useNewUrlParser:true});
const port = 4000;
const app=express();
app.listen(port,()=>console.log("listening to :" + port));

const func = function(req,res){
    client.connect(function(err){
           if(err) {
               console.log(err);
               return;
           }
            const db =client.db('homework01');
            const collection=db.collection('data');
            const query ={};
            const projection={key: 1,message: 1};
            collection.findOne(query,projection, function(err,doc){
                //console.log(doc);
                var encryptor = require('simple-encryptor')(doc.key);
                var decrypted = encryptor.decrypt(doc.message);
                //console.log(decrypted);
                res.send(decrypted);
            }) ;

    })

};

app.get('/secret', func);

