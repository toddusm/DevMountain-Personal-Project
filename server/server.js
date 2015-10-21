// External Modules
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var cors = require('cors');
var request = require('request');

// CONFIG
var config = require('./config');

//Controllers
var UserCtrl = require('./controllers/UserCtrl');
var MessageCtrl = require('./controllers/messageCtrl');
var CensusCtrl = require('./controllers/censusCtrl')

// Services
var passport = require('./services/passport');

// Policies
var isAuthed = function(req, res, next){
	if(!req.isAuthenticated()) return res.sendStatus(401);
	return next();
};

// Express
var app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/../public'));
app.use(session({
	secret: 'grass-crown',
	saveUninitialized: true,
  	resave: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Endpoints
//sign up and login
app.post('/user', UserCtrl.register);
app.post('/login', passport.authenticate('local'), function(req, res) {
	res.json(req.user);
});
//get user and users
app.get('/user/:id', UserCtrl.getCurrentUser);
app.get('/sessionUser', UserCtrl.me)
app.get('/logout', function(req, res){
	req.logout();
	res.redirect('/');
});
app.get('/user', UserCtrl.getAllUsers)

//update users
app.put('/user', UserCtrl.update)

//create message
app.post('/message', MessageCtrl.create);

//get messages
app.get('/message/:id', MessageCtrl.getMessages)
app.get('/message', MessageCtrl.getAllMessages)

// reply
app.put('/message/:id/conversation/:conversationId', MessageCtrl.createReply)

//Census api
app.get('/census/:zip', CensusCtrl.getInfo)


//Connection
var mongoUri = config.MONGO_URI;
var port = config.PORT;

// mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
	console.log('connected to monogdb at: ' + mongoUri);
});

app.listen(port, function(){
	console.log('listening on port: ' + port);
})