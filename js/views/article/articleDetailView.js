define([ 'jquery', 'underscore', 'backbone', 'markdown', 'models/app/AppConfig', 'models/article/article', 'libs/meny/meny.min', 'views/sidebar/sidebarView', 'views/article/postView', 'text!templates/content/contentTemplate.html' ], 

function($, _, Backbone, Markdown, AppConfig, Article, meny, SidebarView, PostView, ContentTemplate) {

    var HomeView = Backbone.View.extend({

        el : ".contents",

        template: _.template(ContentTemplate),
        
        initialize : function(slug) {
            var that = this;
            this.config = new AppConfig();
            this.model = new Article(slug);

            
            this.model.fetch({success: function(data){
                that.render();
            }});
              

            //this.listenTo(this.model, 'set', this.render);
            //this.model.fetch();
        },

        render : function() {
            var that = this;

            // Sidebar
            var sidebarView = new SidebarView();
            sidebarView.render();
            this.meny();

            // Content
            this.model.attributes.summary = marked(this.model.attributes.summary); // parse markdown
            console.log(this.model.attributes);
            $(this.el).empty();
            var postView = new PostView();
            this.$el.append( postView.render(this.model.attributes).el );

            /*
            $(this.el).empty();
            this.collection.each(function( item ){
                item.attributes.summary = marked(item.attributes.summary); // parse markdown
                this.renderArticle( item );
            }, this);
            */    
            
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