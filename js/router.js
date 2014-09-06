
define(['jquery', 'underscore', 'backbone', 'jqueryBlockUI', 'views/appView', 'models/app/AppConfig', 'views/content/contentView'], 
function($, _, Backbone, BlockUI, AppView, AppConfig, ContentView) {

    var AppRouter = Backbone.Router.extend({
        routes : {
            ''          : 'showContent',
        }
    });

    var initialize = function() {

        var app_router = window.app_router = new AppRouter();

        Backbone.View.prototype.goTo = function(loc) {
            app_router.navigate(loc, {
                trigger : true,
                replace : true
            });
        };

        app_router.on('route:showContent', function() {
            var contentView = new ContentView();
        });

        Backbone.history.start();

    };
    return {
        initialize : initialize
    };
});
