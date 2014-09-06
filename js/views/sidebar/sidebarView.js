define([ 
'jquery', 
'underscore', 
'backbone',
'text!templates/sidebar/sidebarTemplate.html'
], function($, _, Backbone, SidebarTemplate) {

	var app = app || {};

	app.SidebarView = Backbone.View.extend({
		
		el: '.meny',

        template: _.template(SidebarTemplate),

		render : function() {
			this.$el.html(this.template());
			return this;
		},
		
	});

	return app.SidebarView;

});
