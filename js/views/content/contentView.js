define([ 'jquery', 'underscore', 'backbone', 'markdown', 'models/app/AppConfig', 'collections/posts/posts', 'libs/meny/meny.min', 'views/sidebar/sidebarView', 'views/article/articleView', 'text!templates/content/contentTemplate.html' ], 

function($, _, Backbone, Markdown, AppConfig, Posts, meny, SidebarView, ArticleView, ContentTemplate) {

    var HomeView = Backbone.View.extend({

        el : ".contents",

        template: _.template(ContentTemplate),
        
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
                item.attributes.created = new Date(item.attributes.created);
                this.renderArticle( item );
            }, this);    
            
        },

        renderArticle: function( item ){
            var articleView = new ArticleView({
                model:item
            });
            this.$el.append( articleView.render().el );
        },

        showArticle: function(e){
            var slug = e.target.attributes.data.value;
            window.app_router.navigate("blog/"+slug, {trigger: true}); // , replace: true
        },

        meny : function(){
            // Create an instance of Meny
            var meny = Meny.create({
                // The element that will be animated in from off screen
                menuElement: document.querySelector( '.meny' ),

                // The contents that gets pushed aside while Meny is active
                contentsElement: document.querySelector( '.contents' ),

                // [optional] The alignment of the menu (top/right/bottom/left)
                position: Meny.getQuery().p || 'left',

                // [optional] The height of the menu (when using top/bottom position)
                height: 200,

                // [optional] The width of the menu (when using left/right position)
                width: 260,

                // [optional] Distance from mouse (in pixels) when menu should open
                threshold: 40
            });

            // API Methods:
            // meny.open();
            // meny.close();
            // meny.isOpen();
            
            // Events:
            // meny.addEventListener( 'open', function(){ console.log( 'open' ); } );
            // meny.addEventListener( 'close', function(){ console.log( 'close' ); } );

            // Embed an iframe if a URL is passed in

            if( Meny.getQuery().u && Meny.getQuery().u.match( /^http/gi ) ) {
                var contents = document.querySelector( '.contents' );
                contents.style.padding = '0px';
                contents.innerHTML = '<div class="cover"></div><iframe src="'+ Meny.getQuery().u +'" style="width: 100%; height: 100%; border: 0; position: absolute;"></iframe>';
            }
        },

    });
    return HomeView;
});