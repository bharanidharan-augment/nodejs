var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello, it's node js express server working");
});

app.listen(3000);