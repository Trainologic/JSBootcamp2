const shelljs = require("shelljs");


//proc = shelljs.exec("node_modules\\.bin\\http-server", {async: true});

//console.log(proc);
//proc.disconnect();

var spawn = require('child_process').spawn;
var exec = require('child_process').exec;
var ls = exec('START node_modules\\.bin\\http-server', function(error, stdout, stderr) {
});
//ls.disconnect();

process.exit(0);
