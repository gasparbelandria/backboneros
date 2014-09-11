define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){

	var app = app || {};

	app.Disqus = Backbone.Model.extend({

		defaults: {
			disqus_shortname: '',
			disqus_identifier: '',
			disqus_title: '',
			disqus_url: '',
			disqus_category_id: ''
		}

	});

	return app.Disqus;

});	