define([ 'jquery', 'underscore', 'backbone', 'models/disqus/disqus', 'text!templates/article/disqusTemplate.html' ], 

function($, _, Backbone, DisqusModel, DisqusTemplate) {

    var DisqusView = Backbone.View.extend({

        el : "#comments",

        template: _.template(DisqusTemplate),
        
        initialize : function( attr ) {
            this.render(attr);
        },

        events : {
            //
        },

        render : function(attr) {
            this.$el.html( this.template() );

            this.disqus = new DisqusModel();
            var disqus_obj = {
                disqus_shortname: 'backboneros',
                disqus_identifier: attr.slug,
                disqus_title: attr.title,
                disqus_url: 'http://backboneros.com/backboneros/#blog/'+attr.slug,
                disqus_category_id: attr.id
            };
            var dsq = document.createElement('script'); 
                dsq.type = 'text/javascript'; 
                dsq.async = true;
                dsq.src = '//' + disqus_obj.disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        },

    });
    return DisqusView;
});