var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
//require the mongoose config file file
require('./server/config/mongoose.js');
//store the function in a variable
var routes_setter = require('./server/config/routes.js');
//invoke the function stored in routes_setter and pass it the 'app' variable
routes_setter(app);

var server = app.listen(8000, function(){
	console.log('Listening to Quoting Dojo on port 8000');
});

//Remember that require will first run the file at the given 
// location (in this case our routes.js file) and then return whatever 
// is in module.exports. In our case, the function that we store in 
// module.exports is now stored in the "routes_setter" variable. We then 
// invoke the function passing it our app variable as an argument which sets 
// up all of our route handlers!