define([ 'jquery', 'underscore', 'backbone', 'models/app/AppConfig', 'views/header/headerView', 'views/sidebar/sidebarView', 'text!templates/sidebar/sidebarTemplate.html', 'text!templates/home/homeTemplate.html' ], 

function($, _, Backbone, AppConfig, HeaderView, SidebarView, HomeTemplate) {
    var HomeView = Backbone.View.extend({

        el : ".contents",

        template: _.template(HomeTemplate),
        
        initialize : function(options) {
            this.config = new AppConfig();
        },
        render : function() {
            console.log('HOMEEEEEE')

            var that = this;

            // Header
            var headerView = new HeaderView();
            headerView.render();

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