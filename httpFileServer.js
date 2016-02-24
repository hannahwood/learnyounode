var http = require('http');
var fs = require('fs');

function callback (request, response) { 
	response.writeHead(200, { 'content-type': 'text/plain' });
	var readStream = fs.createReadStream(process.argv[3]).pipe(response);
	return readStream;
};

var server = http.createServer(callback);
server.listen(process.argv[2]);
