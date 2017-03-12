const express = require("express");
const path = require("path");

var app = express();

// app.get("/config.json", function() {
// });

app.use(express.static(path.resolve(__dirname, "..")));

app.listen(3000, function() {
    console.log("Server is running");
});
