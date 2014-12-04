define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){

	var app = app || {};

	app.Category = Backbone.Model.extend({

		urlRoot: "api/categories",

		defaults: {
			id: 0,
			name: ''
		}

	});

	return app.Category;

});	