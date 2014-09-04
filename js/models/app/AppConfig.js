define(
		[ 'underscore', 'backbone' ],
		function(_, Backbone) {
			var url = location.protocol + "//" + location.host;
			var REST_URL = url + "/backboneros/api";
			var WEB_URL = url;
			var WEB_FOLDER = '/backbone/backboneros';

			var AppConfig = Backbone.Model.extend({
				defaults : {
					restpath : REST_URL,
					timeout : 10000,
					webRootPath : WEB_URL,
					webRootFolder : WEB_FOLDER,
				},

				restAPI : {
					//avatarUser : '/rest/avatar/user/',
					//avatarGroup : '/rest/avatar/group/'
				}
			});

			return AppConfig;

		});