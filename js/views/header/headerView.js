define([ 'jquery', 'jqueryui', 'underscore', 'backbone', 'bootstrap', 'adminflare', 'models/app/AppConfig',
        'text!templates/header/headerTemplate.html' ], function($, ui, _, Backbone, Bootstrap, Adminflare, AppConfig,
        headerTemplate) {

    var HeaderView = Backbone.View.extend({
        
		el: '#body',

        template: _.template(headerTemplate),
		
        initialize : function() {
            this.config = new AppConfig();
        },

        render : function() {
            console.log('header');
            var that = this;
            this.$el.html(this.template());
			return this;
        },

    });

    return HeaderView;

});
