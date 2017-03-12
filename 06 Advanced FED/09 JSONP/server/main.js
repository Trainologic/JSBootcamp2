const express = require("express");
const path = require("path");

var app = express();

app.get("/api", function(req, res) {
    var data = {id:1,name:"Ori"};
    res.write("g(" + JSON.stringify(data) + ")");
    res.end();
});

app.use(express.static(path.resolve(__dirname, "..")));

app.listen(3000, function() {
    console.log("Server is running");
});
