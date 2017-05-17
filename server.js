var app = require("express")();
var express=require("express");
var http= require("http").Server(app);
var io = require("socket.io")(http);
var users = 0;

http.listen(3000, function(){
	console.log("Yipikai, branché au serveur 3000");
;})

app.use(express.static(__dirname +"/public"))

app.get("/", function(req, res){

	res.sendFile(__dirname+"/public/index.html");
});
//quand on se connecte sur le serveur
io.on("connection", function(socket){
	console.log('a user connected');
	//quand on se deconnecte
	socket.on("disconnect", function(){
		console.log("Oh! il s'est barré!");
	});
});

io.on('connection', function(socket){
	var addedUser = false;
  // quand le client envoi un message , ecoute et execute
  socket.on('chat message', function(msg){
  	// on demande au client d'executer le message
  	socket.broadcast.emit("chat message", {
  		username: socket.username,
  		message: msg
  	})
    console.log('message: ' + msg);
  });
});



io.emit("some event", {for: "everyone"});

io.on("connection", function(socket){
	socket.on("chat message", function(msg){
		io.emit("chat message", msg);
	})
})
