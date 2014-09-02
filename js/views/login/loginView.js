define([ 'jquery', 'underscore', 'backbone', 'jqueryui', 'jqueryb64', 'models/app/AppConfig', 'text!templates/login/loginTemplate.html' ], 

function($, _, Backbone, ui, Base64, AppConfig, loginTemplate) {

    var LoginView = Backbone.View.extend({

        el : "#body",

        template: _.template(loginTemplate),

        initialize : function(options) {
            $('#body').addClass('signin-page');
            this.config = new AppConfig();
            this.render();

        },
        render : function() {
            $(this.el).empty();
            this.$el.html(this.template()).appendTo('#body');
        },

        events : {
            "click #signin" : "determineRedirect",
        },

        determineRedirect : function() {
            this.config = new AppConfig();
            window.location.replace(this.config.get('webRootPath') + this.config.get('webRootFolder') + "#dashboard");
        },

    });

    return LoginView;
});