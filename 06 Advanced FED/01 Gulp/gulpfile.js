const gulp = require("gulp");
const {compileTS, compileSASS, asyncOperation} = require("./build/main");

gulp.task("default", function() {
    console.log("xxx");
});

gulp.task("ts", function() {
    compileTS();
});

gulp.task("dev", function() {

    return Promise.resolve()
        .then(asyncOperation)
        .then(compileTS)
        .then(compileSASS);

    // asyncOperation();
    // compileTS();
    // compileSASS();
    //
    // return asyncOperation().then(function() {
    //     return compileTS().then(function() {
    //         compileSASS();
    //     });
    // });
});

gulp.task("server", function() {
    shelljs.exec(path.normalize("node_modules/.bin/http-server"));
});
