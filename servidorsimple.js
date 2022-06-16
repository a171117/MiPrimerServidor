'use strict';
const http = require('http');


const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Hola Mundo');
});

server.listen(8001);
console.log('Listening en puerto 8001');