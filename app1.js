const express = require('express');


const app1 = express();


const x =app1.use(function(req, res, next){
    const MongoClient = require('mongodb').MongoClient;
    const mongo_url="mongodb+srv://henocka:ETsfe2019@mycluster-r22ak.mongodb.net/homework07";
    MongoClient.connect(mongo_url, {useNewUrlParser: true})
        .then(client=>{
                const db = client.db('homework07');
                const collection =db.collection('lecture');
                app1.locals.collection = collection;
        }).catch(err=>console.error(err));
    next();
    });

module.exports=x;

