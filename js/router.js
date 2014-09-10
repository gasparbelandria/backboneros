
define(['jquery', 'underscore', 'backbone', 'jqueryBlockUI', 'views/appView', 'models/app/AppConfig', 'views/content/contentView', 'views/article/articleDetailView'], 
function($, _, Backbone, BlockUI, AppView, AppConfig, ContentView, ArticleDetailView) {

    var AppRouter = Backbone.Router.extend({
        routes : {
            ''          : 'showContent',
            "blog/:id"  : "showArticle",
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

        app_router.on('route:showArticle', function(slug) {
            var articleDetailView = new ArticleDetailView({id:slug});
        });

        Backbone.history.start();

    };
    return {
        initialize : initialize
    };
});
