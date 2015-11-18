##Emily Hayes Your Utah Real Estate Resource

Real Estate site that includes a customer portal with a message center to allow for easy back and forth for agent and client. 

##General Info
* Register user which adds them to a client database.
* Login saves customer info and uses Passport for auth. 
* Client page that allows them to easily message their agent, update their contanct information, and look up neighborhood       information via the Census Api.
* Admin page that allows to easily search for current clients and reply to messages. 

##MEAN STACK
  1. FrontEnd- Angular
    * Angular is a front end MVC framework.  Used to create front end web application as well getting data with $http, moving       that data around and providing functionality to the html.
  2. BackEnd - Node Express MongoDb 
    * Node was used for my web server.
    * Express was used to make building the web server easy.
    * MongoDb was used as the data base. There are two collections:user, conversations.

|Dependencies     |Used For|
|-------------------|-------------------------------------------|
|bcryptjs           |This turns the password to a hash.|
|body-parser        |Body parser is used as middleware that returns objects in req.body or returns an error to the callbacks|
|cors               |Allows for http requests from different domain than the one that served the request.|
|express-session    |Used to save the user info to the session in server once logged in.|
|mongoose           |Used to help model my databse schema's.|
|passport           |Passport was used to authenticate users in Nodejs|
|nodeMailer         |Used to allow potential clients to email the agent.
|request            |Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows                        redirects by default.
