var express = require("express"),
    app     = express();
    
app.get('/', function(req, res){
   res.send("HI there from express!!!") 
});

app.listen(process.env.PORT, function(){
    console.log("app is running on PORT " + process.env.port);
})