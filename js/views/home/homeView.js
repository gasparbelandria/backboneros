define([ 'jquery', 'underscore', 'backbone', 'models/app/AppConfig', 'views/sidebar/sidebarView', 'text!templates/sidebar/sidebarTemplate.html', 'text!templates/home/homeTemplate.html' ], 

function($, _, Backbone, AppConfig, SidebarView, HomeTemplate) {
    var HomeView = Backbone.View.extend({

        el : ".contents",

        template: _.template(HomeTemplate),
        
        initialize : function(options) {
            this.config = new AppConfig();
        },

        render : function() {
            var that = this;

            // Sidebar
            var sidebarView = new SidebarView();
            sidebarView.render();

            // Content
            $(this.el).empty();
            this.$el.html(this.template());
        },
    });
    return HomeView;
});