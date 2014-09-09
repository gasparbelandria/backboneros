define([
'jquery',
'underscore',
'backbone',
'models/article/article'
], function($, _, Backbone, Article){

	var app = app || {};

	app.Posts = Backbone.Collection.extend({
		model: Article,
		url: "api/aticles",		
	});

	return app.Posts;

});