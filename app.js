var express= require("express");

var app= express();
var log4js = require('log4js');
var logger = log4js.getLogger();
logger.debug("Some debug messages");




app.set("view engine","pug");
app.use(express.static("public"));
var server = require("http").Server(app);//Servidor web

var io= require("socket.io")(server);







app.get("/",function(req,res){
    res.render("index");
    
});




server.listen(8080,function(){
    
});