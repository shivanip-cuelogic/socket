var app = require('express')();
var http = require('http').Server(app);
var socket = require('socket.io')(http);
const port = 8000;
require('dotenv').config();
//console.log(io, "io");

app.get('/', function(req, res) {
   res.sendFile(__dirname + '/index.html');
});

//Whenever someone connects this gets executed
socket.on('connection', function(io) {
   console.log('A user connected',socket.id);

//Whenever someone disconnects this piece of code executed
   socket.on('disconnect', function () {
      console.log('A user disconnected',socket.id);
   });
});

http.listen(port, function() {
   console.log('listening on port:8000');
});