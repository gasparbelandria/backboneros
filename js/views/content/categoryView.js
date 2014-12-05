define([
'jquery',
'underscore',
'backbone',
'text!templates/content/categoriesTemplate.html'
], function($, _, Backbone, CategoryTemplate){

	var app = app || {};

	app.CategoryView = Backbone.View.extend({

		tagName: 'div',
		className: 'categories',
		template: _.template( CategoryTemplate ),

		render: function(){
			this.$el.append( this.template( this.model.attributes ) );
			return this;
		}

	});

	return app.CategoryView;

});

