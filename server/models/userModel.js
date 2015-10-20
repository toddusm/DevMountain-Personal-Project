var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var User = new mongoose.Schema({
	firstName: {type: String},
	lastName: {type: String},
	email: {type: String, unique: true, trim: true},
	password: {type: String},
	address: {type: String},
	city: {type: String},
	state: {type: String},
	zip: {type: String},
	phoneNumber: {type: String},
	birthday: {type: String},
	anniversary: {type: String},
	child1: {type: String},
	child2: {type: String},
	child3: {type: String},
	child4: {type: String},
	pet1: {type: String},
	pet2: {type: String},
	pet3: {type: String},
	admin: {type: Boolean, default: false}
	
});

User.pre('save', function(next) {
	var user = this;
	if (!user.isModified('password'))	return next();
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(user.password, salt);
  user.password = hash;
  return next(null, user);
});

User.methods.verifyPassword = function(reqBodyPassword){
	var user = this;
	return bcrypt.compareSync(reqBodyPassword, user.password);
};

module.exports = mongoose.model('User', User);