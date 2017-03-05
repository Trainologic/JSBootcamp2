const shelljs = require("shelljs");
const path = require("path");

function compileTS() {
    console.log("Compiling Typescript");
    shelljs.exec(path.normalize("node_modules/.bin/tsc"));
}

function compileSASS() {
    console.log("Compiling SASS");
    shelljs.exec(path.normalize("node_modules/.bin/node-sass"));
}

function asyncOperation() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve();
        }, 2500);
   });
}

module.exports = {
    compileTS: compileTS,
    compileSASS: compileSASS,
    asyncOperation: asyncOperation,
}