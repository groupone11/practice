var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/forum', {useNewUrlParser: true});
var Schema = mongoose.Schema;

module.exports = {
	Schema,
	mongoose
}
