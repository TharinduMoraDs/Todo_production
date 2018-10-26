var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    name: String,
    time: String,

});

module.exports = mongoose.model('Task', TaskSchema);