var recipes = require('./data/recipes').data;

exports.list = function(request, response){
	response.render('recipes.ejs', {
		title: 'Clever Kitchens - Recipe List',
		recipes: recipes
	});
};

exports.single = function(request, response){
	var data = recipes.filter(function (recipe){
		// if the following evaluates to true, 
		// data becomes an array containing
		// all elements where condition is true
		return (recipe.url === request.params.title);
	});

	if (data.length > 0){
		data = data[0];
		data.title = "Clever Kitchens - Recipe";

		response.render('recipe.ejs', data);
	} else {
		response.status(404).render('error.ejs', {title: "Recipe not found"});
	}
};

exports.suggest = function(request, response){
	response.render('suggest_result.ejs', {
		title: 'Clever Kitchens - Thanks!',
		name: request.body.name,
		ingredients: request.body.ingredients,
		directions: request.body.directions
	});
};