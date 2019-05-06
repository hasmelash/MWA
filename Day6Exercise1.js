const express = require('express');
const fs = require('fs');
const path = require('path');
const morgan = require("morgan");
const bodyParser = require('body-parser');
const { check } = require('express-validator/check');
const cors=require('cors');
const port =4000;
const app=express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const x = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags:'a'});
app.use(morgan('combined', {stream:x}));
app.listen(port, ()=>console.log("server is listening on port" + port));

const grades = [{id:1,name:"Henock Asmelash", course:"CS572", grade:100}];

const validator = function(req,res, next){
    if(check(req.body).isJSON()){
        return next();
    }else{
        console.log("huh???");
    }
};


const getting = function(req, res){
    res.send(req.params);
    res.end();
};

app.get('/grades', validator, getting);



const posting = function(req, res){
    if(!req.body){
        return res.status(400).send({message: "grades are empty"});
    }

    grades.push(req.body);
    console.log(grades);
    res.send(grades);


};
app.post('/grades', validator,posting);



const updating =function(req, res){
    const idOfGrade = req.params.id;

    grades.forEach((grade)=>{
        if(grade.id==idOfGrade){
        grade.id=req.body.id;
        grade.name=req.body.name;
        grade.course=req.body.course;
        grade.grade=req.body.grade;
        console.log(grades);
    }
})

    res.send(grades);

};
app.put('/grades/:id',validator, updating);



const deleting = function(req, res){
    const idOfGrade = req.params.id;

    grades.forEach((grade)=>{
        if(grade.id==idOfGrade){
        for (var i=0; i<grades.length;i++){
            const x =grades.indexOf(grade)
            grades.splice(x,1);

        }
    }
});

    res.send(grades);
};
app.delete('/grades/:id',validator, deleting);




