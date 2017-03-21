var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = Schema({
    name: String,
    parentId: Schema.Types.ObjectId,
    content: String,
    owner: Schema.Types.ObjectId,
    shared: Boolean
});

module.exports = mongoose.model('Item', itemSchema);