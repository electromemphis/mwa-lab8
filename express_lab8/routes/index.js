var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {

    console.log(req.get('host'));
    res.render('index', { msg: "hello", urlAdd: "/add", urlUpdate: "/update", urlDelete: "/delete" });
});

module.exports = router;
