define([
'jquery',
'underscore',
'backbone',
'text!templates/article/articleTemplate.html'
], function($, _, Backbone, ArticleTemplate){

	var app = app || {};

	app.ArticleView = Backbone.View.extend({

		tagName: 'div',
		className: 'articles',
		template: _.template( ArticleTemplate ),

		render: function(){
			//this.el is what we defined in tagName. use $el to get access to jQuery html() function
			this.$el.html( this.template( this.model.attributes ) );
			return this;
		}

	});


	return app.ArticleView;

});
