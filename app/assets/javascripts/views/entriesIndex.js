Zoidberg.Views.entriesIndex = Backbone.View.extend({
	template: JST["entries/index"],
	
	initialize: function(){
		this.listenTo(this.collection, "sync", this.render)
	},
	
	events: {
		"click #fewerP": "fewerParagraphs",
		"click #moreP": "moreParagraphs"
	},
	
	render: function(){
		var renderedContent = this.template({
			 collection: this.collection.sample(this.model.attributes.size),
			 model: this.model
		 });
		this.$el.html(renderedContent);
		return this;
	},
	
	fewerParagraphs: function(){
		var currValue = parseInt(this.model.attributes.paragraphs, 10) - 1;
		var droppedValue =  parseInt(this.model.attributes.size,10) - 10;
		if(droppedValue < 10){
			droppedValue = 10;
		}
		if(currValue < 10){
			currValue = 1;
		}
		if( currValue || currValue >= 1 ){
			var minusOne = currValue - 1;
		} else {
			var minusOne = 1;
		}
		var locat = "/" + droppedValue + "/" + minusOne;
		Backbone.history.navigate(locat, {trigger: true});
	},
	
	moreParagraphs: function(){
		var currValue = parseInt(this.model.attributes.paragraphs, 10) + 1;
		var boostedValue =  parseInt(this.model.attributes.size,10) + 10;
		if( currValue || currValue >= 2 ){
			var plusOne = currValue + 1;
		} else {
			var plusOne = 1;
		}
		var locat = "/" + boostedValue + "/" + plusOne;
		Backbone.history.navigate(locat, {trigger: true});
	}
	
});