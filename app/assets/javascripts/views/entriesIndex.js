Zoidberg.Views.entriesIndex = Backbone.View.extend({
	template: JST["index"],
	
	initialize: function(){
		this.listenTo(this.collection, "sync", this.render)
	},
	
	render: function(){

		var renderedContent = this.template({ collection: this.collection });
		this.$el.html(renderedContent);
		return this;
	}
	
});