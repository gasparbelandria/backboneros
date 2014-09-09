//--------------
require.config({

    baseUrl : "./js",

    paths : {

        // Core Libraries

        jquery                  : 'libs/jquery/jquery-min',
        underscore              : 'libs/underscore/underscore',
        backbone                : 'libs/backbone/backbone',
		marionette              : 'libs/backbone/marionette',
        json2                   : "libs/backbone/json2",
        jqueryui                : 'libs/jquery/jquery-ui-1.10.1.custom',
        text                    : 'libs/underscore/text',
        //dashboard               : 'assets/javascripts/1.3.0/dashboard/dashboard',

        // Plugins

        jqueryendless_scroll    : 'libs/jquery/jquery.endless-scroll',
        jqueryb64               : 'libs/jquery/jquerybase64',
        jqueryBlockUI           : 'libs/jquery/blockUI',
        jqueryCookie            : 'libs/jquery/cookie',
        meny                    : 'libs/meny/meny.min',
        markdown                : 'libs/markdown/mmd.min',

        // Application libs

        adminflare              : "assets/javascripts/1.3.0/adminflare-demo-init.min",
        modernizr               : "assets/javascripts/1.3.0/modernizr-jquery.min",
        adminflaredemo          : "assets/javascripts/1.3.0/adminflare-demo.min",
        bootstrap               : "assets/javascripts/1.3.0/bootstrap.min",
        adminflaremin           : "assets/javascripts/1.3.0/adminflare.min",

        // Application Folders

        templates               : '../templates',
        
    },

    // Sets the configuration for your third party scripts that are not AMD compatible

    shim : {

        "jqueryui" : [ "jquery" ],

        "meny" : {
            deps : [ "jquery" ],
            exports : "meny"
        },

        "modernizr" : {
            deps : [ "jquery" ]
        },
				
        "marionette" : {
            deps : [ "backbone" ],
            exports : "ChildViewContainer"
        },
		
        "bootstrap" : {
            deps : [ "jquery" ]
        },

        "adminflare" : [ "bootstrap", "jquery", "modernizr" ],
                
        "underscore" : {
            "exports" : "_"
        },
		
        "text" : {
            "exports" : "text"
        },

        // Backbone
        "backbone" : {
            // Depends on underscore and jQuery
            "deps" : [ "underscore", "text", "jquery"],
            // Exports the global window.Backbone object
            "exports" : "Backbone"
        },
       
    }

});

require([
// Load our app module and pass it to our definition function
'app' ], function(App) {
    // The "app" dependency is passed in as "App"
    // Again, the other dependencies passed in are not "AMD" therefore don't
    // pass a parameter to this function
    App.initialize();
});
