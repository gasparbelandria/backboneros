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
		},

        events : {
            'click .categories': 'handleFilter'
        },

        handleFilter: function(e) {
            //console.log(e.target.attributes[1].value);
            $('.clear').each(function(){
            	//console.log($(this).attr('data-category'));
            	if (e.target.attributes[1].value === $(this).attr('data-category')){
            		if ($(this).hasClass('deactive')){
            			console.log('deactivate');
            			$(this).removeClass('deactive');
						$(this).animate({
							opacity: 1,
							left: "-=50",
							height: "toggle"
						}, 500, function() {
							console.log('Animation complete');
						});
            		}else{
            			console.log('activate');
						$(this).addClass('deactive');
						$(this).animate({
							opacity: 0.25,
							left: "+=50",
							height: "toggle"
						}, 2500, function() {
							console.log('Animation complete');
						});
            		}

            	}
            });
        },		

	});

	return app.CategoryView;

});

