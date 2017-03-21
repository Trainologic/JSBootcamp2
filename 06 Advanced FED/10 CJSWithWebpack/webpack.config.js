var path = require('path');

module.exports = {
    entry: './main.js',
    output: {
        filename: 'app.bundle.js'
    },
    devtool: "inline-source-map"
};