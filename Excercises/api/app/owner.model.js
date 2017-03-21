var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ownerSchema = Schema({
    name: String,
});

module.exports = mongoose.model('Owner', ownerSchema);