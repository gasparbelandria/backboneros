define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){

	var app = app || {};

	app.Article = Backbone.Model.extend({
		defaults: {
			slug: '',
			title: '',
			summary: '',
			body: ''
		}
	});

	return app.Article;

});	