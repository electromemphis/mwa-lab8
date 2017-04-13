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
                    "name" : "Dollars Shop",
                    "category" : "Store",
                    "longitude" : 45,
                    "latitude" : -55
                    };
        
        // db.collection("positions").update(query,updatedDoc,(err,numUpdated)=>{
        //     if(err) throw err;
        //     console.log("updated num="+numUpdated);
        //     res.end("Updated "+numUpdated);
        //     return db.close();
        // });

        db.collection("positions").remove(query,(err,removed)=>{
            if(err) throw err;
            console.log("removed="+removed);
            res.end("Deleted  "+removed);
            return db.close();
        });

    });

});

module.exports = router;



