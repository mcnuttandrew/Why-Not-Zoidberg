Zoidberg.Routers.Router = Backbone.Router.extend({
	routes: {
		"": "defaultBehave",
		":id": "justSentances",
		":id/:numPs": "fullShow"
	},
	
	initialize: function (el) {
		this.$rootEl = el;
	},
	
	defaultBehave: function () {
		this.fullShow(10, 1);
	},
	
	justSentances: function (id) {
		this.fullShow(id, 1);
	},
	
	fullShow: function(id, numPs){
		Zoidberg.Collections.entries.fetch();
		var sizeModel = new Zoidberg.Models.Size({size: id, paragraphs: numPs});
		var indexView = new Zoidberg.Views.entriesIndex({
			collection: Zoidberg.Collections.entries, 
			model: sizeModel
		});
		this.$rootEl.html(indexView.render().$el);
	}
	
})