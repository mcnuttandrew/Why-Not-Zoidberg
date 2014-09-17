Zoidberg.Views.entriesIndex = Backbone.View.extend({
	template: JST["entries/index"],
	
	initialize: function(){
		this.listenTo(this.collection, "sync", this.render)
	},
	
	render: function(){
		var renderedContent = this.template({
			 collection: this.collection.sample(10) 
		 });
		this.$el.html(renderedContent);
		return this;
	}
	
});