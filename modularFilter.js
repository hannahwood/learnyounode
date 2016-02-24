var fs = require('fs');

module.exports = function (directory, extension, callback) {
	var regex = new RegExp('\\.' + extension + '$');
	fs.readdir(directory, function (err, list) {
    if (err) {
      	return callback(err);
    };
	function match (file) {
      	return regex.test(file);
    };
    callback(null, list.filter(match));
  })
}