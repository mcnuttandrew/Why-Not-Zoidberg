Zoidberg.Routers.Router = Backbone.Router.extend({
	routes: {
		"": "index"
	},
	
	initialize: function (el) {
		this.$rootEl = el;
	},
	
	index: function () {
		Zoidberg.Collections.entries.fetch();
		var indexView = new Zoidberg.Views.entriesIndex({
			collection: Zoidberg.Collections.entries
		});
		this.$rootEl.html(indexView.render().$el);
	}
	
})