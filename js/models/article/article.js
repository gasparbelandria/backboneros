define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){

	var app = app || {};

	app.Article = Backbone.Model.extend({

		urlRoot: "api/articles",

		defaults: {
			id: 0,
			slug: '',
			title: '',
			summary: '',
			detail: ''
		}

	});

	return app.Article;

});	