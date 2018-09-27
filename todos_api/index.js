// todos_api/index.js - server app
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');
var todoRoutes = require('../routes/todos')
    
app.get('/', function(req, res){
   res.send("Hello from the root route"); 
});

app.use('/api/todos', todoRoutes);


app.listen(process.env.PORT, function(){
    console.log("app is running on PORT " + process.env.PORT);
})