define([
'jquery',
'underscore',
'backbone',
'models/article/category'
], function($, _, Backbone, Category){

	var app = app || {};

	app.Categories = Backbone.Collection.extend({
		model: Category,
		url: "api/categories",		
	});

	return app.Categories;

});