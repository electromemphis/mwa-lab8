const express = require('express');
const router = express.Router();

router.get("/",(req,res,next)=>{
    
    if(req.query.name){
        res.render("update");
    }else{
        res.render("search");
    }
})

module.exports = router;