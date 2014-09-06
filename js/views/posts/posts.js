app = app || {};

app.LibraryView = Backbone.View.extend({

	initialize: function( initialBooks  ){
		this.collection = new app.Library( initialBooks );
		this.render();
		this.listenTo( this.collection, 'add', this.renderBook );
	},

	render: function(){
		this.collection.each(function( item ){
			this.renderBook( item );
		}, this);
	},

	renderBook: function( item ){
		var bookView = new app.BookView({
			model:item
		});
		this.$el.append( bookView.render().el );
	},

});