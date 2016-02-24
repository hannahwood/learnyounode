var fs = require('fs');
var file = fs.readFileSync(process.argv[2]).toString();

var fileSplit = file.split('\n');
console.log(fileSplit.length - 1);