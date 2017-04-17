const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const dbPath = "mongodb://localhost:27017/testDb";

router.get("/",(req,res,next)=>{

    if(req.query.name){
        var query = {"name":req.query.name};
        console.log(query);
        MongoClient.connect(dbPath,(err,db)=>{ 
            db.collection('locations').findOne(query,(err,doc)=>{
                console.log(doc);
                if(doc){
                    res.render("update",{"location":doc});

                }else{
                    res.render("search");
                }
            });
        });
    }else{
        res.render("search");
    }
})

module.exports = router;