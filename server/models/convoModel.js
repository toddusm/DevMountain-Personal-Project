var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	messages: [{text: {type: String, maxlength: 300}, user: {type:mongoose.Schema.Types.ObjectId, ref: 'User'}}],
		user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('Converstaion', schema);

// var schema = new mongoose.Schema({
// 		//_id
// 		messages: [{text: {type: String, maxlength: 300}, user: {type:mongoose.Schema.Types.ObjectId, ref: 'User'}}],
// 		user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
// })


// app.get('/messages/:userId', function(){
// 	Message.find({user: req.params.userId})
// 	//$push()
	
// })