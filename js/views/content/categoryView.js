define([
'jquery',
'underscore',
'backbone',
'text!templates/content/categoriesTemplate.html', 'collections/posts/categories'
], function($, _, Backbone, CategoryTemplate, Categories){

	var app = app || {};

	app.CategoryView = Backbone.View.extend({

		tagName: 'div',
		className: 'categories',
		template: _.template( CategoryTemplate ),

        initialize : function() {
			alert('a');
            var that = this;
            this.collection = new Categories();
            this.listenTo(this.collection, 'reset', this.render);
            this.collection.fetch({reset: true});
        },

		render: function(){
			console.log(this.collection);
			//this.$el.html( this.template( this.model.attributes ) );
			return this;
		}

	});

	return app.CategoryView;

});
