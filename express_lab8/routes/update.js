const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const dbPath = "mongodb://localhost:27017/testDb";

router.get("/",(req,res,next)=>{

    res.render("update");
});


router.post("/",(req,res,next)=>{

    MongoClient.connect(dbPath,(err,db)=>{
        if(err) throw err;
        var query = {"name":"Parksosur"};
        var updatedDoc =   {
                "name" : req.body.name,
                "category" : req.body.category,
                "longitude" : req.body.longitude,
                "latitude" : req.body.latitude
        };
        if(req.body.action = "update"){
            db.collection("locations").update(query,updatedDoc,(err,numUpdated)=>{
                if(err) throw err;
                console.log("updated num="+numUpdated);
                console.log(numUpdated);
                console.log("============");
                console.log(updatedDoc);
                res.end(""+numUpdated);
                return db.close();
            });
        }else{

            db.collection("positions").remove(query,(err,removed)=>{
                if(err) throw err;
                console.log("removed="+removed);
                res.end("Deleted  "+removed);
                return db.close();
            });
        }


    });

});

module.exports = router;



