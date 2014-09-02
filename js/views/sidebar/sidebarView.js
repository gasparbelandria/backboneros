define([ 'jquery', 'underscore', 'backbone',
		'text!templates/sidebar/sidebarTemplate.html' ], function($, _,
		Backbone, SidebarTemplate) {

	var SidebarView = Backbone.View.extend({

		tagName: 'div',
		
		el: '#sidebar',

        template: _.template(SidebarTemplate),

		events: {
			/*
			'click #albums': 'showAlbums',
			'click #contacts': 'showContacts',
			'click #conversations': 'showConversations',
			'click #files': 'showFolder',
			*/
		},

		initialize : function(options) {
			//
		},

		render : function() {
			console.log('sideBar');
			this.$el.html(this.template());
			return this;
		},
		
		showUser: function(){
			//window.app_router.navigate("user", {trigger: true, replace: true});
		},

	});

	return SidebarView;

});
