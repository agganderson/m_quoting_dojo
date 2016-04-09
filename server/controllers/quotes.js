//First, let's create methods to handle tasks that get 
//triggered on specific routes (showing all quotes, and creating a quote). 

var mongoose = require('mongoose');
//register the schema as a model
var Quote = mongoose.model('Quote');
module.exports = {
	show: function(req, res){
		Quote.find({}, function(err, quotes){
			res.render('main', {quotes:quotes});
		});
	},
	create: function(req, res){
		var quotes = new Quote({name:req.body.name, quote:req.body.quote});
		quotes.save(function(err){
			if(err){
				console.log('Something went wrong getting that quote');
			}
			else{
				console.log('Yay you got that quote!');
				res.redirect('/quotes');
			}
		});
	}
}