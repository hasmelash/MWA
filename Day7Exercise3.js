const express=require('express');
const con = require('./typescript/app');
const bodyParser = require('body-parser');
const app=express();
port=4000;
app.listen(port, ()=>console.log("listening to : " + port));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//-----------------------------connection sharing -------------------


//-------GET----
//
// const getting = function(req,res){
//                     const collection = req.app.locals.collection;
//                     collection.findOne({}, function(err,doc){
//                         if(err) throw err;
//                         res.send(doc);
//
//                     });
//
//                 }
// app.get('/lectures', getting);

//-------POST----

const posting = function(req,res){
                    const collection = con;
                       // console.log(collection);
                        collection.save(req.body);
                }
app.post('/lectures', posting);

//------Delete----
const deleting = function (req, res){
                    const collection = req.app.locals.collection;
                    const coursename = req.params.course;
                    collection.findOne({course: {$eq: coursename}}, function(err, doc){
                        console.log(doc);
                        collection.remove(doc);
                        //const item= doc
                    });

                };
app.delete('/lectures/:course', deleting);

//------Search----

const searching = function(req,res){
                    const collection = req.app.locals.collection;
                    const searchkey = req.params.q;
                    collection.find({lecture:{$regex: searchkey}}).toArray(function (err, doc){
                        res.send(doc);
                    });

                }
app.get('/lectures/:q', searching);