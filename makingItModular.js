
var filter = require('./modularFilter.js');

function callback(err, list) {
	if (err){
    	return console.error('ERROR:', err);
	};

	list.forEach(function (file) {
    	console.log(file);
    });
};

filter(process.argv[2], process.argv[3], callback);