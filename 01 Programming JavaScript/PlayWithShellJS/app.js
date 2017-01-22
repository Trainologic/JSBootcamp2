const shelljs = require("shelljs");

shelljs.exec("START node_modules\\.bin\\http-server", {async: true});

console.log("xxx");
