var User = require('../models/userModel')

module.exports = {
	// Create New User
	register: function(req, res){
		User.create(req.body, function(err, user){
			if(err){
				return res.status(500).json(err)
			} else {
				user.password = null;
				return res.json(user)
			}
		});
	},
	
	// Log in User
	me: function(req, res){
		if(!req.user){
			return res.send("current user not defined");
		} else {
			req.user.password = null;
			return res.json(req.user);
		}
	},
	
	getCurrentUser: function(req, res){
		User.findById(req.params.id, function(err, result){
			if(err){
				res.send(err)
			} else {
				console.log("Get Current User", result)
				res.json(result)
			}
		})	
	},
	
	// Users can update their information
	update: function(req, res, done){
		User.findByIdAndUpdate(req.user._id, req.body, {new: true}, function(err, result){
			if(err){
				return res.status(500).json(err)
			} else {
				res.status(200).json(result);
			}
		});
	},
	
	// Admin view All Users
	getAllUsers: function(req, res) {
		User.find()
		.exec(function(err, result){
			if(err){
				return res.status(500).json(err)
			} else {
				res.status(200).json(result);
			}
		})
	},
};