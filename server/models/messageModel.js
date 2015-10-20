var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	conversations: [{
		message: {type: String, maxlength: 300},
		reply: [{type: String, maxlength: 300}],
		user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
	}]
})

module.exports = mongoose.model('Message', schema);