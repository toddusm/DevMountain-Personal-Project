var mongoose = require('mongoose');
var Convo = require('../models/convoModel');

module.exports ={
	create: function(req, res){
		console.log("create new converstaion", req.body)
		// var newConvo = new Convo();
		// newConvo.messages = [];
		// newConvo.messages.push({text: req.body.messages[0].text, user: mongoose.Schema.Types.ObjectId(req.body.messages[0].user)});
		// newConvo.user = mongoose.Schema.Types.ObjectId(req.body.user);
		// newConvo.save(function(err, result){
		Convo.create(req.body, function(err, result){
			if (err) {
				console.log("Convo Create Err", err)
				return res.status(500).send(err);
				}
			res.json(result)
		});
	},
	
	getConvos: function(req, res){
		Convo.find({})
			.where("user")
			.equals(req.params.id)
			.populate({path: 'messages.user', select: 'firstName'})
			.exec(function(err, result) {
				console.log(result);
				if (err) return res.status(500).json(err);
				return res.status(200).json(result);
   			 });
	},
	
	getAllConvo: function(req, res){
		Convo.find()
		.populate({
			path: 'messages.user',
			select: 'firstName'
		})
		.exec(function(err, result){
			if (err) return res.status(500).json(err);
			return res.status(200).json(result);
		})
	},
	
	deleteConvo: function(req, res){
		console.log("dltMsg", req.params.id)
		Convo.findByIdAndRemove(req.params.id, function(err, result){
			if(err){
				res.send(err)
			} else {
				res.json(result)
			}
		})
	},
	// Replies
	createReply: function(req, res){
		Convo.findByIdAndUpdate(req.params.id, {$push: {messages: req.body.reply}}, {new: true})
		.populate({path: 'messages.user', select: 'firstName'})
		// .select('messages')
		// .select('messages.text messages.user.firstName')
		.exec(function(err, convo){
			if(err) return res.status(500).json(err);
			return res.status(200).json(convo.messages[convo.messages.length-1]);
		});
	},
}