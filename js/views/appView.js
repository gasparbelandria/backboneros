define([
  'jquery',
  'underscore',
  'models/app/AppConfig'
], function($, _, AppConfig){
    // App View function that manages page transitions
    var AppView = {
      showView: function(view){
        // Close any existing views
        if (this.currentView){
            console.error('closing view!');
            this.currentView.close();
        }
        // Hack - clean up any leftover html
        $('#body').empty();
        // Set the new view
        this.currentView = view;
        this.currentView.render();
      },
    };
    return AppView;
});
