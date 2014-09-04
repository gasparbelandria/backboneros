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

		events: {
	        'click .delete': 'deleteBook'
	    },

	    deleteBook: function(){
	    	// delete Model
	    	this.model.destroy();

	    	// delete View
	    	this.remove();
	    },

		render: function(){
			//this.el is what we defined in tagName. use $el to get access to jQuery html() function
			console.log(this.model.attributes)
			this.$el.html( this.template( this.model.attributes ) );
			return this;
		}

	});


	return app.ArticleView;

});
