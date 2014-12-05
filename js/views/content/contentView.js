define([ 'jquery', 'underscore', 'backbone', 'markdown', 'models/app/AppConfig', 'collections/posts/categories', 'collections/posts/posts', 'libs/meny/meny.min', 'views/sidebar/sidebarView', 'views/content/categoryView', 'views/article/articleView', 'text!templates/content/contentTemplate.html' ], 

function($, _, Backbone, Markdown, AppConfig, Categories, Posts, meny, SidebarView, CategoryView, ArticleView, ContentTemplate) {

    var HomeView = Backbone.View.extend({

        el : ".contents",

        template: _.template(ContentTemplate),
        
        initialize : function() {
            var that = this;
            this.config = new AppConfig();
            
            // Categories
            this.collectionCategories = new Categories();
            this.listenTo(this.collectionCategories, 'reset', this.renderCategories);
            this.collectionCategories.fetch({reset: true});
            
            // Post
            this.collectionPost = new Posts();
            this.listenTo(this.collectionPost, 'reset', this.renderPost);
            this.collectionPost.fetch({reset: true});
        },

        events : {
            //'click .slug': 'showArticle'
        },

        renderCategories : function() {
            var that = this;

            // Sidebar
            var sidebarView = new SidebarView();
            sidebarView.render();
            this.meny();

            // Content
            $(this.el).empty();
            this.collectionCategories.each(function( item ){
                this.renderCategory( item );
            }, this);    
        },

        renderCategory: function( item ){
            console.log(item);
            var categoryView = new CategoryView({
                model:item
            });
            this.$el.append( categoryView.render().el );
        },


        renderPost : function() {
            var that = this;

            var months = new Array("Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic");

            // Content
            $(this.el).empty();
            this.collectionPost.each(function( item ){
                item.attributes.summary = marked(item.attributes.summary); // parse markdown

                var d = new Date(item.attributes.created*1000);
                var c_date = d.getDate();
                var c_month = d.getMonth();
                var c_year = d.getFullYear();
                item.attributes.created = c_date + ' ' + months[c_month] + ' ' + c_year;
                
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