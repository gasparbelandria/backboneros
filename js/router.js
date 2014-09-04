
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

        var posts = [
            { slug: 'JavaScript: The Good Parts', title: 'Douglas Crockford', summary: '2008', body: 'JavaScript Programming' },
            { slug: 'The Little Book on CoffeeScript', title: 'Alex MacCaw', summary: '2012', body: 'CoffeeScript Programming' },
            { slug: 'Scala for the Impatient', title: 'Cay S. Horstmann', summary: '2012', body: 'Scala Programming' },
            { slug: 'American Psycho', title: 'Bret Easton Ellis', summary: '1991', body: 'Novel Splatter' },
            { slug: 'Eloquent JavaScript', title: 'Marijn Haverbeke', summary: '2011', body: 'JavaScript Programming' }
        ];

        app_router.on('route:showContent', function() {
            var contentView = new ContentView();
            contentView.render();
        });

        Backbone.history.start();

    };
    return {
        initialize : initialize
    };
});
