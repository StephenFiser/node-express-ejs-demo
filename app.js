var express = require('express');

var app = express();
app.use(express.bodyParser());

var recipes = require('./recipes');

app.get('/', function(request,response){
	response.render('index.ejs', {title: 'Clever Kitchens'});
});

app.get('/recipes', recipes.list);

app.get('/recipes/suggest', function(request, response){
	response.render('suggest.ejs', {title: 'Suggest a Recipe'});
});

app.post('/recipes/suggest', recipes.suggest);

app.get('/recipes/:title', recipes.single);

app.get('/*', function(request,response){
	response.status(404).render('error.ejs', {title: 'Error'});
});

app.listen(3000);
console.log("Listening on port 3000");