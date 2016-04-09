var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');
var quotes = require('../controllers/quotes.js');

module.exports = function(app){
	//copy and paste our route handlers 
	// from the server.js file into the routes.js 
	// file. In order to link them, however, 
	// we need a way to access the "app" variable 
	// from within the routes.js file. We wrap the 
	// routes in a function where we can pass in the 
	// app as a parameter so that we can set up our 
	// routing rules in the routes.js file. 

	app.get('/', function(req, res){
		res.render('index');
	});

	app.post('/quotes', function(req, res){
		quotes.create(req, res);
	});

	app.get('/quotes', function(req, res){
		quotes.show(req, res);
	});
}