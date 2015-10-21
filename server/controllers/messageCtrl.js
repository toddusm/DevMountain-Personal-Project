var Message = require('../models/messageModel');

module.exports ={
	create: function(req, res){
		console.log(req.body)
		Message.create({conversations: req.body}, function(err, result){
			if (err) return res.status(500).send(err);
			res.json(result)
		});
	},
	
	getMessages: function(req, res){
		Message.find({})
			.where("conversations.user")
			.equals(req.params.id)
			.exec(function(err, result) {
				console.log(result);
				if (err) return res.status(500).json(err);
				return res.status(200).json(result);
   			 });
	},
	
	getAllMessages: function(req, res){
		Message.find()
		.populate({
			path: 'conversations.user',
			select: 'firstName lastName'
		})
		.exec(function(err, result){
			if (err) return res.status(500).json(err);
			return res.status(200).json(result);
		})
	},
	
	createReply: function(req, res){
		Message.findById(req.params.id, function(err, message){
			if(err) return res.status(500).json(err);
			for(var i = 0; i < message.conversations.length; i++) {
				if(message.conversations[i]._id.toString() === req.params.conversationId) {
					message.conversations[i].reply.push(req.body.reply);
					message.save(function(error, updatedMessage) {
						if(error) return res.status(500).json(error);
						
					});
				}		
			}
			return res.status(200).json(message);
		});
	},
	
}