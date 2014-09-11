define([ 'jquery', 'underscore', 'backbone', 'views/article/disqusView', 'text!templates/article/disqusTemplate.html' ], 

function($, _, Backbone, DisqusView, DisqusTemplate) {

    var DisqusView = Backbone.View.extend({

        el : "#disqus_thread",

        template: _.template(DisqusTemplate),
        
        initialize : function() {
            var that = this;
            this.config = new AppConfig();
            this.collection = new Posts();
            this.listenTo(this.collection, 'reset', this.render);
            this.collection.fetch({reset: true});
        },

        events : {
            //'click .slug': 'showArticle'
        },

        render : function() {
            var that = this;

            // Sidebar
            var sidebarView = new SidebarView();
            sidebarView.render();
            this.meny();

            // Content
            $(this.el).empty();
            this.collection.each(function( item ){
                item.attributes.summary = marked(item.attributes.summary); // parse markdown
                this.renderArticle( item );
            }, this);    
            
        },

        renderArticle: function( item ){
            var articleView = new ArticleView({
                model:item
            });
            this.$el.append( articleView.render().el );
        },

    });
    return DisqusView;
});