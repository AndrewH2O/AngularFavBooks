//var http = require('http');
var express = require('express');

// function handleRequest(request, response){
//     //response.end('It Works!! Path Hit: ' + request.url);
// }

var server = express();
server.use(express.static(__dirname));

//server = http.createServer(handleRequest);

server.listen(8080,'localhost');


console.log("server listening on 8080");

