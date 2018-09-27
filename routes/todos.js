
var express = require('express');
var router = express.Router();
var db = require("../modles");

router.get('/', function(req, res){
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    })
});


module.exports = router;