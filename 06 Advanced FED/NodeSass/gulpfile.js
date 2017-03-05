const gulp = require("gulp");
const path = require("path");
const open = require("open");
const shelljs = require("shelljs");

function compileSASS() {
    const nodeSass = path.normalize("node_modules/.bin/node-sass");
    shelljs.exec(`${nodeSass} -r ./app -o ./app`);
}

function runServer() {
    console.log("run server");

    shelljs.exec(path.normalize("node_modules/.bin/http-server"), {
        async: true
    });
}

function openBrowser() {
    console.log("open browser");

    open("http://localhost:8080/index.html");
}

gulp.task("dev", function() {
    return Promise.resolve()
        .then(compileSASS)
        .then(runServer)
        .then(openBrowser);
});

gulp.task("sass", function() {
    return Promise.resolve()
        .then(compileSASS);
});

