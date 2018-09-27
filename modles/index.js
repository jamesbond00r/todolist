//modles/index.js - database

//connect to mongoose

var mongoose = require("mongoose");
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todo-api',{useNewUrlParser: true});

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");