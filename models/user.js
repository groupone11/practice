var base = require('./base')
var Schema = base.Schema
var mongoose = base.mongoose

 var userSchema = new Schema({
    id:  Number,
    username: String,
    email: String,
    password: String
 });

  module.exports = mongoose.model('User', userSchema);