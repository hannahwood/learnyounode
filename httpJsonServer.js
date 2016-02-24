var http = require('http');
var url = require('url');


function callback (request, response) { 
	
	var newUrl = url.parse(request.url, true);
    var time = new Date(newUrl.query.iso);
    var result = '';
	
	if (/^\/api\/parsetime/.test(request.url)) {
		result = {
			hour: time.getHours(),
			minute: time.getMinutes(),
			second: time.getSeconds()
       }
	}
	else (result = { unixtime : time.getTime() });

	response.writeHead(200, { 'Content-Type': 'application/json' });
	response.end(JSON.stringify(result));
};

var server = http.createServer(callback);
server.listen(process.argv[2]);