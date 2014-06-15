var converter = require('../lib/converter');

if (process.argv.length < 3) {
	console.log("Error parsing input.");
	console.log("");
	console.log("Usage:");
	console.log("node scripts/convert.js [input filename] [target filename]");

	process.exit(1);
}

var file = process.argv[2];
var target = "api.md"; 

if (process.argv.length >= 4) { 
  target = process.argv[3];
}

converter.readFile(file, target);