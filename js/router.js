
define(['jquery', 'underscore', 'backbone', 'jqueryBlockUI', 'views/appView', 'models/app/AppConfig', 'views/home/homeView'], 
function($, _, Backbone, BlockUI, AppView, AppConfig, HomeView) {

    var AppRouter = Backbone.Router.extend({
        routes : {
            ''          : 'showHome',
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

        app_router.on('route:showHome', function() {
            var homeView = new HomeView();
            homeView.render();
        });

        Backbone.history.start();

    };
    return {
        initialize : initialize
    };
});
