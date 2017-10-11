var childProcess = require('child_process');

var ls = childProcess.exec('npm run dev', function(error, stdout, stderr) {
	if (error) {
		console.log(error.stack);
		console.log('Error code: ' + error.code);
	}
});