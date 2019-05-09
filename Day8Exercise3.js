const express = require("express");
const bodyParser=require('body-parser');
const MongoClient = require('Mongodb').MongoClient;
const app = express();
const port=4000;
const client = new MongoClient('mongodb+srv://henocka:ETsfe2019@mycluster-r22ak.mongodb.net/cafeNearMe', {useNewUrlParser:true});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.listen(port,()=>console.log("listening to : "+ port));

const inserting = function(req,res){
                    client.connect(function(err){
                        if(err) {
                            console.log(err);
                            return;
                        }
                        const db =client.db('cafeNearMe');
                        const collection=db.collection('cafe');
                        // const recieved = req.body;
                        // console.log(recieved);
                        // collection.insertOne(recieved);

                        collection.createIndex({location:'2d'});
                        collection.find({location: {$near:[41.017654,-91.9665234]}}).limit(3).toArray(function(err,doc){
                            console.log(doc);
                            res.send(doc);
                        });


                    });

                }

app.get('/cafe', inserting);

