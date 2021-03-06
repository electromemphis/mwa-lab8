const express = require("express");
const router = express.Router();

var MongoClient = require('mongodb').MongoClient;
const dbPath = "mongodb://localhost:27017/testDb";


router.get("/",(req,res,next)=>{

    res.render('add');

});

router.post("/",(req,res,next)=>{

    MongoClient.connect(dbPath,(err,db)=>{
        if(err) throw err;

        console.log("req body"+req.body.name);
        var doc = {
            "name" : req.body.name,
            "category" : req.body.category,
            "longitude" : req.body.longitude,
            "latitude" : req.body.latitude
        }
        db.collection("locations").insert(doc,(err,docInserted)=>{
            if(err) throw error;
            console.log("inserted"+ doc);
            console.log("posted!"+res);
            res.end("added!");
            return db.close();
        });

    });


});

module.exports = router;