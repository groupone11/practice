var base = require('./base')
var Schema = base.Schema
var mongoose = base.mongoose
 var contentSchema = new Schema({
    id:  Number,
    title: String,
    like_nums: Number,
    comment_nums: Number,
    status:Number
 });

 module.exports = mongoose.model('Content', contentSchema);