define([
'jquery',
'underscore',
'backbone',
'text!templates/article/articleDetailTemplate.html'
], function($, _, Backbone, ArticleDetailTemplate){

	var app = app || {};

	app.PostView = Backbone.View.extend({

		tagName: 'div',
		className: 'articles',
		template: _.template( ArticleDetailTemplate ),

		render: function( model ){
			this.$el.html( this.template( model ) );
			return this;
		}

	});

	return app.PostView;

});
